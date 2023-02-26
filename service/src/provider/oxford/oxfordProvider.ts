import environments from "../../environments";
import { GET, optionsProps } from "../provider";

const options: optionsProps = {
  host: environments.OXFORD_APP_HOST,
  port: environments.OXFORD_APP_PORT,
  headers: {
    app_id: environments.OXFORD_APP_ID,
    app_key: environments.OXFORD_APP_KEY,
  },
};

const getSearchWordOxford = async (
  lenguage: string,
  wordId: string,
  fields: string = "definitions,examples",
  strictMatch: string = "false"
) => {
  const body = await GET({
    ...options,
    path: `${environments.OXFORD_APP_PATH_VERSION}${lenguage}/${wordId}?fields=${fields}&strictMatch=${strictMatch}`,
  });
  return body;
};

export { getSearchWordOxford };
