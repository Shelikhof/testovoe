import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/index.js";
import { errorHandlerMiddleware } from "./src/middlewares/errorHandler.middleware.js";

dotenv.config();

const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use("/", router);
app.use(errorHandlerMiddleware);

const bootstrap = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

bootstrap();
