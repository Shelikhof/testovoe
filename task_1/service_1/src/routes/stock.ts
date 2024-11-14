import { Router } from "express";
import { dtoValidationMiddleware } from "../middlewares/dtoValidation.middleware";
import { StockCreateSchema } from "../dtos/Stock.dto";
import StockController from "../contollers/Stock.controller";

const stockRouter = Router();

stockRouter.get("/", StockController.getAllStocks);
stockRouter.post("/add", dtoValidationMiddleware(StockCreateSchema), StockController.createStock);
stockRouter.patch("/:id/increase", StockController.stockIncrease);
stockRouter.patch("/:id/decrease", StockController.stockDecrease);

export default stockRouter;
