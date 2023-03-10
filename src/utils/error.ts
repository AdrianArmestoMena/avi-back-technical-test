import type CustomError from "../types/CustomError";

const createCustomError = (
  code: number,
  publicMessage: string,
  privateMessage: string
): CustomError => {
  const error = new Error() as CustomError;

  error.statusCode = code;
  error.publicMessage = publicMessage;
  error.privateMessage = privateMessage;

  return error;
};

export default createCustomError;
