import dotenv from "dotenv";
dotenv.config();

export default {
  APP_SECRET: process.env.APP_SECRET,
  PORT: Number(process.env.PORT ?? 5000),
  OXFORD_APP_HOST: process.env.OXFORD_APP_HOST ?? "od-api.oxforddictionaries.com",
  OXFORD_APP_PORT: process.env.OXFORD_APP_PORT ?? "443",
  OXFORD_APP_ID: process.env.OXFORD_APP_ID ?? "",
  OXFORD_APP_KEY: process.env.OXFORD_APP_KEY ?? "",
  OXFORD_APP_PATH_VERSION: process.env.OXFORD_APP_PATH_VERSION,
};
