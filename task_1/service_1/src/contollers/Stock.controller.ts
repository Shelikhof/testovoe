import { NextFunction, Request, Response } from "express";
import { StockCreateDTO, StockUpdateDTO } from "../dtos/Stock.dto";
import StockService from "../services/Stock.service";
import { log } from "console";
import ApiError from "../utils/apiErros";
import toNumberOrUndefined from "../utils/toNumberOrUndefined";

class StockController {
  async createStock(req: Request<any, any, StockCreateDTO>, res: Response, next: NextFunction) {
    try {
      await StockService.createStock(req.body);
      res.status(201).send();
      return;
    } catch (error) {
      next(error);
    }
  }

  async getAllStocks(req: Request, res: Response, next: NextFunction) {
    try {
      const queryParams = req.query as unknown as getAllStocksParams;

      const result = await StockService.getAllStocks(queryParams);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async stockIncrease(req: Request<any, any, StockUpdateDTO>, res: Response, next: NextFunction) {
    try {
      const id = toNumberOrUndefined(req.params.id);

      if (!id) {
        throw ApiError.notFound();
      }

      const stock = await StockService.getStockById(id);

      if (!stock) {
        throw ApiError.notFound();
      }

      await StockService.updateStock(id, req.body, true);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async stockDecrease(req: Request<any, any, StockUpdateDTO>, res: Response, next: NextFunction) {
    try {
      const id = toNumberOrUndefined(req.params.id);

      if (!id) {
        throw ApiError.notFound();
      }

      const stock = await StockService.getStockById(id);

      if (!stock) {
        throw ApiError.notFound();
      }

      await StockService.updateStock(id, req.body, false);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new StockController();

export interface getAllStocksParams {
  shop_id?: number;
  plu?: number;
  quantityOnShelfFrom?: number;
  quantityOnShelfTo?: number;
  quantityInOrderFrom?: number;
  quantityInOrderTo?: number;
}
