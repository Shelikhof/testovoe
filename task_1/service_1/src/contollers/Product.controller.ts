import { NextFunction, Request, Response } from "express";
import { ProductCreateDTO } from "../dtos/Product.dto";
import ProductService from "../services/Product.service";
import toNumberOrUndefined from "../utils/toNumberOrUndefined";

class ProductController {
  async createProduct(req: Request<any, any, ProductCreateDTO>, res: Response, next: NextFunction) {
    try {
      const result = await ProductService.createProduct(req.body);
      res.status(201).send();
      return;
    } catch (error) {
      next(error);
    }
  }

  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const plu = toNumberOrUndefined(req.query.plu as string);

      const name = req.query.name as string | undefined;

      const result = await ProductService.getAllProducts(plu, name);
      res.status(200).send(result);
      return;
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductController();
