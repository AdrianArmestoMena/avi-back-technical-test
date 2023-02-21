import express from "express";
import morgan from "morgan";
import { generalError } from "./middlewares/generalError";

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.static("uploads"));
app.use(express.json());

app.use(generalError);

export default app;
