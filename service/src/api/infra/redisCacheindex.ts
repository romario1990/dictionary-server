import { createClient } from "redis";
import environments from "../../environments";

const client = createClient({
  url: "redis://redis:6379",
});

const setCache = async (word: string, cache: any): Promise<void> => {
  client.set(word, JSON.stringify(cache), { EX: environments.EX_TIME_REDIS });
};

const getCache = async (word: string): Promise<any> => {
  const cache = await client.get(word);
  if (cache) {
    return JSON.parse(cache);
  }
  return undefined;
};

export { client, setCache, getCache };
