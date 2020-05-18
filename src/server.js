import express from "express";

import config from "./config";

export const app = express();

export const start = () => {
  app.listen(config.port, () => {
    console.log(
      `Server running in ${config.env} mode on http://localhost:${config.port}`
    );
  });
};
