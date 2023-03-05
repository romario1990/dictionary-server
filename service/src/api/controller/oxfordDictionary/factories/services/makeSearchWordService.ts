import { IFactory } from "../../../../core/interfaces";
import { SearchWordService } from "../../services";
import { SaveWordUsecase, SearchWordUsecase } from "../../usecases";
import { makePgOxfordDictionaryRepository } from "../repositories";

export const makeSearchWordService: IFactory<SearchWordService> = (
  ...args
): SearchWordService => {
  const pgOxfordDictionaryRepository = makePgOxfordDictionaryRepository(
    ...args
  );
  const searchWordUsecase = new SearchWordUsecase(pgOxfordDictionaryRepository);
  const saveWordUsecase = new SaveWordUsecase(pgOxfordDictionaryRepository);
  return new SearchWordService(searchWordUsecase, saveWordUsecase);
};
