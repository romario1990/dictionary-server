import https from "https";

type headersProps = {
  app_id: string;
  app_key: string;
};

export type optionsProps = {
  host: string;
  port: string;
  path?: string;
  method?: string;
  headers: headersProps;
};

const GET = async (options: optionsProps): Promise<any> => {
  let body: any = "";
  await new Promise((resolve, reject) => {
    https.get(
      { ...options, method: "GET" },
      (resp: {
        on: (arg0: string, arg1: { (d: any): void }) => void;
      }): void => {
        try {
          resp.on("data", (d: any): void => {
            body += d;
          });
          resp.on("end", () => {
            resolve("ok");
          });
        } catch (error) {
          reject(error);
        }
      }
    );
  });
  return JSON.parse(body);
};

export { GET };
