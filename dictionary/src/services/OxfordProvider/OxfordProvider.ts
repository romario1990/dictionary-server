import { get } from "../BaseProvider";
import { OxfordDictionaryProps } from "./OxfordProps";

const getDefinitionsWord = (language: string, word: string) =>
  get<OxfordDictionaryProps>(
    `/api/dictionary/search?lenguage=${language}&wordId=${word}`
  );

export { getDefinitionsWord };
