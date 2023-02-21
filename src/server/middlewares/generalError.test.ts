import { type Request, type Response } from "express";
import { generalError } from "./generalError";

describe("Given a general error midelware", () => {
  const req = {} as Partial<Request>;
  const next = jest.fn();
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Partial<Response>;

  describe("When it is called with a next function, a responose a request and an error", () => {
    test("The it should call the status method with error status code", async () => {
      const error = {
        name: "error",
        message: "error",
        statusCode: 404,
        publicMessage: "error message",
      };

      generalError(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(error.statusCode);
    });
    test("Then it should call the json method with the error message", async () => {
      const error = {
        name: "error",
        message: "error",
        statusCode: 404,
        publicMessage: "error message",
      };

      generalError(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ error: error.publicMessage });
    });
  });

  describe("When it is called wit and next function, a responose a request and an error without public error", () => {
    test("The it should call the status method with 'General fucked up' as error message ", async () => {
      const error = {
        name: "error",
        message: "error",
        statusCode: 404,
      };

      const defaultErrorMessage = "Something went wrong";
      generalError(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ error: defaultErrorMessage });
    });
  });
});
