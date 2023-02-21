import { notFoundError } from "./notFoundError";
import { type Request, type Response } from "express";

describe("Given a notFoundError midelware", () => {
  describe("When it is calles wit and next function, a responose and a request", () => {
    const req = {} as Partial<Request>;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Partial<Response>;
    test("The it should call the status method with 404 as status code", () => {
      const statusCode = 404;
      notFoundError(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });

    test("The it should call the json method with an error", () => {
      const error = { error: "Endpoint Not Found" };

      notFoundError(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(error);
    });
  });
});
