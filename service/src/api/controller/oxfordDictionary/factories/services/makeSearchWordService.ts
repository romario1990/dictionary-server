import { IFactory } from "../../../../core/interfaces";
import { SearchWordService } from "../../services";
import { SearchWordRouterUsecase } from "../../usecases";
import { makePgOxfordDictionaryRepository } from "../repositories";

export const makeSearchWordService: IFactory<SearchWordService> = (
  ...args
): SearchWordService => {
  const pgOxfordDictionaryRepository = makePgOxfordDictionaryRepository(
    ...args
  );
  const searchWordRouterUsecase = new SearchWordRouterUsecase(
    pgOxfordDictionaryRepository
  );
  return new SearchWordService(searchWordRouterUsecase);
};
