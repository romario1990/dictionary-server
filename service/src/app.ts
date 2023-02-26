import cors from "cors";
import dotenv from "dotenv";
import express, {
  json,
  NextFunction,
  Request,
  Response,
  urlencoded
} from "express";
import swaggerUi from "swagger-ui-express";
import { router } from "./api/router";
import HttpException from "./exceptions/HttpException";
import errorMiddleware from "./middlewares/ErrorMiddleware";
import { swaggerDocument } from "./swagger";

dotenv.config();

const app = express();

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCssUrl: "/api/static/swagger/swagger.css",
  })
);

app.use(json({ limit: "5mb" }));
app.use(urlencoded({ extended: false }));

app.use(cors());

app.use("/api/", router);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new HttpException(404, "Rota não encontrada"));
});

app.use(errorMiddleware);

export { app };
