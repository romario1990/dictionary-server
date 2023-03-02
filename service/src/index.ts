import dotenv from "dotenv";
import http from "http";
import { client } from "./api/infra";

import { app } from "./app";
import environments from "./environments";

dotenv.config();

const server = new http.Server(app);

const port = environments.PORT;

async function start(): Promise<void> {
  await client.connect()
  server.listen(port, () => {
    console.info(`started in port: ${port}`);
  });
}

start();
