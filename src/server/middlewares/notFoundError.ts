import { type Request, type Response } from "express";

export const notFoundError = (req: Request, res: Response) => {
  const error = { error: "Endpoint Not Found" };
  res.status(404).json(error);
};
