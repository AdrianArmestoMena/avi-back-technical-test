import type { NextFunction, Request, Response } from "express";
import chalk from "chalk";
import type CustomError from "../../types/CustomError";

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction
) => {
  console.log(chalk.red(`Error ${error.message}`));
  const statusCode = error.statusCode ?? 500;
  const message = error.publicMessage ?? "Something went wrong";

  res.status(statusCode).json({ error: message });
};
