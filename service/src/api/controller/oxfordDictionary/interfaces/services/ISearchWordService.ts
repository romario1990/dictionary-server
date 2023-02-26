import { OxfordDictionaryModel } from "../../entities";

interface ISearchWordService {
  exec: (payload: ISearchWordServiceProps.Request) => Promise<ISearchWordServiceProps.Response>;
}

namespace ISearchWordServiceProps {
  type Query = {
    wordId: string;
    lenguage: string;
    fields?: string;
    strictMatch?: string;
  }
  export type Request = {
    query: Query
  };
  export type Response = OxfordDictionaryModel;
}

export { ISearchWordService, ISearchWordServiceProps };
