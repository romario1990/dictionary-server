import { OxfordDictionaryModel } from "../../entities";

export interface ISearchWordUseCase {
  handle: (
    payload: ISearchWordUseCase.payload
  ) => Promise<ISearchWordUseCase.Response>;
}

export namespace ISearchWordUseCase {
  export type Response = OxfordDictionaryModel | null;
  export type payload = {
    wordId: string;
    lenguage: string;
    fields?: string;
    strictMatch?: string;
  };
}
