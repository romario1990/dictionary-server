import { IPgOxfordDictionaryRepository } from "../../../controller/oxfordDictionary/interfaces/repositories";
import { getCache } from "../../redisCacheindex";
import { OxfordDictionaryDatabase } from "./entities";

class PgOxfordDictionaryRepository implements IPgOxfordDictionaryRepository {
  async searchWord(
    payload: OxfordDictionaryDatabase.payload
  ): Promise<OxfordDictionaryDatabase.Response | null> {
    return getCache(payload.wordId)
  }
}

export { PgOxfordDictionaryRepository };
