import { ISaveWordRepository } from "./ISaveWordRepository";
import { ISearchWordRepository } from "./ISearchWordRepository";

export interface IPgOxfordDictionaryRepository extends 
    ISearchWordRepository,
    ISaveWordRepository {}
