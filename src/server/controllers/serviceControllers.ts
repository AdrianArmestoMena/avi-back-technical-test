import { type NextFunction, type Request, type Response } from "express";
import {
  getById,
  updateCondition,
  updateDate,
} from "../../models/serviceModel";
import { type UpdateConditionBody } from "../../types/types";
import dateInPast from "../../utils/dateInPast";
import createCustomError from "../../utils/error";

export const getService = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params;

  try {
    // eslint-disable-next-line no-implicit-coercion
    getById(+id, (error: Error, results) => {
      if (error) {
        next(error);
      } else if (!results.length) {
        const error = createCustomError(
          404,
          "No existen servicios con el identificador proporcionado",
          "ID invalido"
        );
        next(error);
      } else {
        response.status(200).json({ serviceData: results });
      }
    });
  } catch (error: unknown) {
    next(error);
  }
};

export const putConditionById = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params;
  const { condition }: UpdateConditionBody = request.body;
  console.log(request.body);

  try {
    // eslint-disable-next-line no-implicit-coercion
    updateCondition(+id, condition, (error: Error) => {
      if (error) {
        next(error);
      } else {
        response.status(201).json({ result: "Updated correctly" });
      }
    });
  } catch (error: unknown) {
    next(error);
  }
};

export const putDateById = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params;
  const { date } = request.body;

  try {
    const newDate = new Date(date);

    if (dateInPast(newDate)) {
      const error = createCustomError(
        404,
        "Fecha inválida. Asegurese que la fecha indicada es posterior al día de hoy",
        "Past date"
      );
      next(error);
      return;
    }

    // eslint-disable-next-line no-implicit-coercion
    updateDate(+id, date, (error: Error) => {
      if (error) {
        next(error);
      } else {
        response.status(201).json({ result: "Updated correctly" });
      }
    });
  } catch (error: unknown) {
    next(error);
  }
};
