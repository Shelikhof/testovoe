import { Router } from "express";
import { dtoValidationMiddleware } from "../middlewares/dtoValidation.middleware";
import { ProductCreateSchema } from "../dtos/Product.dto";
import ProductController from "../contollers/Product.controller";

const productRouter = Router();

productRouter.get("/", ProductController.getAllProducts);
productRouter.post("/add", dtoValidationMiddleware(ProductCreateSchema), ProductController.createProduct);

export default productRouter;
