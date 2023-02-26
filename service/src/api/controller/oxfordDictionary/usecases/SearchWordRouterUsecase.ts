import { IUsecase } from "../../../core/interfaces";
import { ISearchWordRepository } from "../interfaces/repositories";
import { ISearchWordUseCase } from "../interfaces/useCases";

export class SearchWordRouterUsecase
  implements IUsecase<ISearchWordUseCase.payload, ISearchWordUseCase.Response>
{
  constructor(
    private readonly pgOxfordDictionaryRepository: ISearchWordRepository
  ) {}

  async handle(
    payload: ISearchWordUseCase.payload
  ): Promise<ISearchWordUseCase.Response> {
    return this.pgOxfordDictionaryRepository.searchWord(payload);
  }
}
