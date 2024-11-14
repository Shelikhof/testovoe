import db from "../db";
import { ProductCreateDTO } from "../dtos/Product.dto";
import ApiError from "../utils/apiErros";
import { ACTIONS, sendLog } from "../utils/sendLog";

class ProductService {
  async createProduct(dto: ProductCreateDTO) {
    const productExists = await db.product.findUnique({ where: { plu: dto.plu } });

    if (productExists) {
      throw ApiError.badRequest("Product with this code already exists");
    }

    await db.product.create({
      data: { ...dto },
    });

    sendLog(ACTIONS.createProduct, dto.plu);

    return;
  }

  async getAllProducts(plu: number | undefined, name: string | undefined) {
    const products = await db.product.findMany({ where: { plu, name: name ? { startsWith: name, mode: "default" } : undefined } });
    return products;
  }

  async getProductById(id: number) {
    const product = await db.product.findUnique({ where: { id } });
    return product;
  }
}

export default new ProductService();
