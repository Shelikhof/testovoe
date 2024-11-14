import { Router } from "express";
import productRouter from "./product";
import stockRouter from "./stock";

const router = Router();

router.use("/products", productRouter);
router.use("/stocks", stockRouter);

export default router;
