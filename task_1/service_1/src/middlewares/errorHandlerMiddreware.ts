import { log } from "console";
import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import ApiError from "../utils/apiErros";

export const errorHandlerMiddleware: ErrorRequestHandler = (err: Error | ApiError, req: Request, res: Response, next: NextFunction) => {
  log(err);

  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message });
    return;
  }

  res.status(500).json({ message: "Something went wrong" });
  return;
};
