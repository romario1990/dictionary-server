import { OxfordDictionaryModel } from "../../entities";

export interface ISaveWordUseCase {
  handle: (payload: ISaveWordUseCase.payload) => Promise<null>;
}

export namespace ISaveWordUseCase {
  export type payload = OxfordDictionaryModel;
}
