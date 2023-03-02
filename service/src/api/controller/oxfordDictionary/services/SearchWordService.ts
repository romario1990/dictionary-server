import { Service } from "../../../core/Service";
import { ISearchWordUseCase } from "../interfaces/useCases";
import { ISearchWordServiceProps } from "../interfaces/services";
import { getSearchWordOxford } from "../../../../provider/oxford";
import { validateIsMissingAllParams } from "../../../core/validate/validateIsMissingAllParams";
import { validateStringParam } from "../../../core/validate/validateStringParam";
import { setCache } from "../../../infra";

export class SearchWordService extends Service<
  ISearchWordServiceProps.Request,
  ISearchWordServiceProps.Response
> {
  constructor(private readonly searchWordUseCase: ISearchWordUseCase) {
    super();
  }

  async exec(
    request: ISearchWordServiceProps.Request
  ): Promise<ISearchWordServiceProps.Response> {
    validateIsMissingAllParams(request.query, ["wordId", "lenguage"]);
    validateStringParam(request.query, ["wordId", "lenguage"]);
    const { wordId, fields, strictMatch, lenguage } = request.query;
    try {
      const word = await this.searchWordUseCase.handle({
        wordId,
        fields,
        strictMatch,
        lenguage,
      });
      if (!word) {
        throw new Error("Word not found");
      }
      return word;
    } catch (error) {
      const data = await getSearchWordOxford(
        lenguage,
        wordId,
        fields,
        strictMatch
      );
      setCache(wordId, data)
      return data;
    }
  }
}
