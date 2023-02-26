import { IPgOxfordDictionaryRepository } from "../../../controller/oxfordDictionary/interfaces/repositories";
import { OxfordDictionaryDatabase } from "./entities";

class PgOxfordDictionaryRepository implements IPgOxfordDictionaryRepository {
  constructor(connection: any) {
    // TODO CONNECT DATABASE?
    // super(
    // )
  }

  async searchWord(
    payload: OxfordDictionaryDatabase.payload
  ): Promise<OxfordDictionaryDatabase.Response | null> {

    // TODO Add database to keep word cache for a while finished in env
    if (payload.wordId === "cheese") {
      return {
        id: "explore",
        metadata: {
          operation: "retrieve",
          provider: "Oxford University Press",
          schema: "RetrieveEntry",
        },
        results: [
          {
            id: "explore",
            language: "en-gb",
            lexicalEntries: [
              {
                entries: [
                  {
                    senses: [
                      {
                        definitions: [
                          "travel through (an unfamiliar area) in order to learn about it",
                        ],
                        examples: [
                          {
                            text: "he explored the Fontainebleau forest",
                          },
                          {
                            registers: [
                              {
                                id: "figurative",
                                text: "Figurative",
                              },
                            ],
                            text: "the project encourages children to explore the world of photography",
                          },
                        ],
                        id: "m_en_gbus0342860.007",
                        subsenses: [
                          {
                            definitions: [
                              "search for resources such as mineral deposits",
                            ],
                            examples: [
                              {
                                text: "the company has been granted licences to explore for petroleum",
                              },
                            ],
                            id: "m_en_gbus0342860.017",
                          },
                        ],
                      },
                    ],
                  },
                ],
                language: "en-gb",
                lexicalCategory: {
                  id: "verb",
                  text: "Verb",
                },
                text: "explore",
              },
            ],
            type: "headword",
            word: "explore",
          },
        ],
        word: "explore",
      };
    }
    return null;
  }
}

export { PgOxfordDictionaryRepository };
