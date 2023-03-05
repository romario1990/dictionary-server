import { OxfordDictionaryModel } from "../../../controller/oxfordDictionary/entities";
import { IPgOxfordDictionaryRepository } from "../../../controller/oxfordDictionary/interfaces/repositories";
import { getCache, setCache } from "../../redisCacheindex";
import { OxfordDictionaryDatabase } from "./entities";

class PgOxfordDictionaryRepository implements IPgOxfordDictionaryRepository {
  
  async saveWord(payload: OxfordDictionaryModel): Promise<null>{
    setCache(payload.word, payload)
    return null
  };

  async searchWord(
    payload: OxfordDictionaryDatabase.payload
  ): Promise<OxfordDictionaryDatabase.Response | null> {
    return getCache(payload.wordId)
  }
}

export { PgOxfordDictionaryRepository };
