import { log } from "console";
import ApiError from "../utils/apiErorrs.js";

export const errorHandlerMiddleware = (err, req, res, next) => {
  log(err);

  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message });
    return;
  }

  res.status(500).json({ message: "Something went wrong" });
  return;
};
