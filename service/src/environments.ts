import dotenv from "dotenv";
dotenv.config();

export default {
  APP_SECRET: process.env.APP_SECRET,
  PORT: Number(process.env.PORT ?? 5000),
  OXFORD_APP_HOST: process.env.OXFORD_APP_HOST ?? "od-api.oxforddictionaries.com",
  OXFORD_APP_PORT: process.env.OXFORD_APP_PORT ?? "443",
  OXFORD_APP_ID: process.env.OXFORD_APP_ID ?? "2f1d7d99",
  OXFORD_APP_KEY: process.env.OXFORD_APP_KEY ?? "17ef5010fadae6922dee385380fff980",
  OXFORD_APP_PATH_VERSION: process.env.OXFORD_APP_PATH_VERSION ?? "/api/v2/entries/",
  EX_TIME_REDIS: Number(process.env.EX_TIME_REDIS || 604800),
  URL_REDIS: process.env.URL_REDIS ?? "redis://redis:6379"
};
