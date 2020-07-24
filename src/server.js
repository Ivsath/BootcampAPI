import express from "express";
import cors from "cors";
import morgan from "morgan";

import bootcamps from "./routes/bootcamps";
import errorHandler from "./middleware/error";

import config from "./config";
import connect from "./utils/db";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());

if (config.isDev) {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);
app.use(errorHandler);

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(
        `Server running in ${config.env} mode on http://localhost:${config.port}`
      );
    });
  } catch (e) {
    console.error(e);
  }
};
