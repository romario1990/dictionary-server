import { OxfordDictionaryModel } from "../../entities";

export interface ISearchWordRepository {
  searchWord: (
    payload: ISearchWordRepository.payload
  ) => Promise<OxfordDictionaryModel | null>;
}

export namespace ISearchWordRepository {
  export type payload = {
    wordId: string;
    lenguage: string;
    fields?: string;
    strictMatch?: string;
  };
  export type Response = OxfordDictionaryModel;
}
