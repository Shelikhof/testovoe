import { Router } from "express";
import { dtoValidationMiddleware } from "../middlewares/dtoValidation.middleware.js";
import { LogCreateSchema } from "../dtos/Log.dto.js";
import LogController from "../controllers/Log.controller.js";

const router = Router();

router.get("/logs/", LogController.getLogs);
router.post("/logs/add", dtoValidationMiddleware(LogCreateSchema), LogController.createLog);

export default router;
