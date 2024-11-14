import express, { Express } from "express";
import dotenv from "dotenv";
import db from "./db";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddreware";
import router from "./routes";

dotenv.config();

const PORT = process.env.PORT || 8080;

export const createApp = async () => {
  const app = express();
  await db.$connect();

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use(express.json());
  app.use("/", router);
  app.use(errorHandlerMiddleware);

  return app;
};

const bootstrap = async () => {
  createApp().then((app) => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
};

bootstrap();
