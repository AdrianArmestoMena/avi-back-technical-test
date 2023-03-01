import express from "express";
import morgan from "morgan";
import {
  getService,
  putConditionById,
  putDateById,
} from "./controllers/serviceControllers";
import { generalError } from "./middlewares/generalError";
import { notFoundError } from "./middlewares/notFoundError";
import multer from "multer";
import corsOptions from "../utils/corsOptions";
import cors from "cors";

const app = express();
const upload = multer();

app.disable("x-powered-by");

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/service/:id", getService);
app.put("/service/updateCondition/:id", upload.none(), putConditionById);
app.put("/service/updateDate/:id", upload.none(), putDateById);

app.use(generalError);
app.use(notFoundError);

export default app;
