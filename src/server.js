import express from "express";
import morgan from "morgan";

import bootcamps from "./routes/bootcamps";

import config from "./config";
import connect from "./utils/db";

export const app = express();

if (config.isDev) {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

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
