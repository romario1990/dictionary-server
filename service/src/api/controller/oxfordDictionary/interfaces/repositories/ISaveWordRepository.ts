import { OxfordDictionaryModel } from "../../entities";

export interface ISaveWordRepository {
  saveWord: (payload: ISaveWordRepository.payload) => Promise<null>;
}

export namespace ISaveWordRepository {
  export type payload = OxfordDictionaryModel;
}
