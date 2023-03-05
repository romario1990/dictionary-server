import { IUsecase } from "../../../core/interfaces";
import { ISaveWordRepository } from "../interfaces/repositories";
import { ISaveWordUseCase } from "../interfaces/useCases";

export class SaveWordUsecase
  implements IUsecase<ISaveWordUseCase.payload, null>
{
  constructor(
    private readonly pgOxfordDictionaryRepository: ISaveWordRepository
  ) {}

  async handle(payload: ISaveWordUseCase.payload): Promise<null> {
    return this.pgOxfordDictionaryRepository.saveWord(payload);
  }
}
