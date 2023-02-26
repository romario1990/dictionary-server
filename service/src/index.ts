import dotenv from "dotenv";
import http from "http";
import { app } from "./app";
import environments from "./environments";

dotenv.config();

const server = new http.Server(app);

const port = environments.PORT;

async function start(): Promise<void> {
  server.listen(port, () => {
    console.info(`started in port: ${port}`);
  });
}

start();
