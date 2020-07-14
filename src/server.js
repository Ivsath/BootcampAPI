import express from "express";
import morgan from "morgan";
import bootcamps from "./routes/bootcamps";
import config from "./config";

export const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

export const start = () => {
  app.listen(config.port, () => {
    console.log(
      `Server running in ${config.env} mode on http://localhost:${config.port}`
    );
  });
};
