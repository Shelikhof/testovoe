import { getAllStocksParams } from "../contollers/Stock.controller";
import db from "../db";
import { StockCreateDTO, StockUpdateDTO } from "../dtos/Stock.dto";
import ApiError from "../utils/apiErros";
import { ACTIONS, sendLog } from "../utils/sendLog";
import toNumberOrUndefined from "../utils/toNumberOrUndefined";
import ProductService from "./Product.service";

class StockService {
  async createStock(dto: StockCreateDTO) {
    const productExists = await db.product.findUnique({ where: { id: dto.productId } });

    if (!productExists) {
      throw ApiError.badRequest("Product does not exist");
    }

    const shopExists = await db.shop.findUnique({ where: { id: dto.shopId } });

    if (!shopExists) {
      throw ApiError.badRequest("Shop does not exist");
    }

    await db.stock.create({ data: { ...dto } });

    sendLog(ACTIONS.createStock, productExists.plu, shopExists.id);

    return;
  }

  async getAllStocks(queryParams: getAllStocksParams) {
    const shopId = toNumberOrUndefined(queryParams.shop_id);
    const plu = toNumberOrUndefined(queryParams.plu);

    const quantityOnShelfFrom = toNumberOrUndefined(queryParams.quantityOnShelfFrom);
    const quantityOnShelfTo = toNumberOrUndefined(queryParams.quantityOnShelfTo);
    const quantityInOrderFrom = toNumberOrUndefined(queryParams.quantityInOrderFrom);
    const quantityInOrderTo = toNumberOrUndefined(queryParams.quantityInOrderTo);

    const stocks = await db.stock.findMany({
      where: {
        shopId,
        quantityOnShelf: {
          gte: quantityOnShelfFrom,
          lte: quantityOnShelfTo,
        },
        quantityInOrder: {
          gte: quantityInOrderFrom,
          lte: quantityInOrderTo,
        },
        product: {
          plu,
        },
      },
      select: {
        id: true,
        shop: {
          select: {
            name: true,
          },
        },
        product: {
          select: {
            name: true,
          },
        },
        quantityInOrder: true,
        quantityOnShelf: true,
      },
    });
    return stocks;
  }

  async getStockById(id: number) {
    const stock = await db.stock.findUnique({ where: { id } });
    return stock;
  }

  async updateStock(id: number, dto: StockUpdateDTO, isIncrement: boolean) {
    const quantityOnShelf = toNumberOrUndefined(dto.quantityOnShelf) || 0;
    const quantityInOrder = toNumberOrUndefined(dto.quantityInOrder) || 0;

    const result = await db.stock.update({
      where: { id },
      data: isIncrement
        ? {
            quantityOnShelf: { increment: quantityOnShelf },
            quantityInOrder: { increment: quantityInOrder },
          }
        : {
            quantityOnShelf: { decrement: quantityOnShelf },
            quantityInOrder: { decrement: quantityInOrder },
          },
    });

    const product = await ProductService.getProductById(result.productId);

    const action = isIncrement ? ACTIONS.increaseStock : ACTIONS.decreaseStock;

    sendLog(action, product?.plu || -1, result.shopId);

    return;
  }
}

export default new StockService();
