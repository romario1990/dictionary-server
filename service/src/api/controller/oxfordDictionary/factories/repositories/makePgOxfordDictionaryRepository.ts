import { IFactory } from "../../../../core/interfaces";
import { PgOxfordDictionaryRepository } from "../../../../infra/database";
import { IPgOxfordDictionaryRepository } from "../../interfaces/repositories";

export const makePgOxfordDictionaryRepository: IFactory<
  IPgOxfordDictionaryRepository
> = (connection) => {
  return new PgOxfordDictionaryRepository();
};
