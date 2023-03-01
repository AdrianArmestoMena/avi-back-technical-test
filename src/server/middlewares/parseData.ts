import { type NextFunction, type Request, type Response } from "express";

const parseData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newCondition = await JSON.parse(req.body);

    req.body = newCondition;

    next();
  } catch (error) {
    next(error);
  }
};

export default parseData;
