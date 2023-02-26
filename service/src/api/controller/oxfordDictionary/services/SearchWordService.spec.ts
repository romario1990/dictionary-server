import { SearchWordService } from "./SearchWordService";

const mock = {
  searchWordSend: {
    query: {
      wordId: "explore",
      lenguage: "en-gb",
    },
  },
  searchWordResp: {
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
                pronunciations: [
                  {
                    audioFile:
                      "https://audio.oxforddictionaries.com/en/mp3/explore__gb_2.mp3",
                    dialects: ["British English"],
                    phoneticNotation: "IPA",
                    phoneticSpelling: "ɪkˈsplɔː",
                  },
                  {
                    audioFile:
                      "https://audio.oxforddictionaries.com/en/mp3/explore__gb_4.mp3",
                    dialects: ["British English"],
                    phoneticNotation: "IPA",
                    phoneticSpelling: "ɛkˈsplɔː",
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
  },
};

const handle = jest.fn().mockResolvedValue(mock.searchWordResp);

const searchWordService = new SearchWordService({
  handle: handle,
});

describe("SearchWordService", () => {
  it("should be able to request searchWordService handle", async () => {
    await expect(
      searchWordService.exec(mock.searchWordSend)
    ).resolves.not.toThrow();
    expect(handle).toHaveBeenCalledTimes(1);
  });
  it("must be able to return searchWordService data handle", async () => {
    expect(await searchWordService.exec(mock.searchWordSend)).toBe(
      mock.searchWordResp
    );
  });
  it("the Request wordId is required", async () => {
    const { wordId, ...queryWithoutWordId } = mock.searchWordSend.query;
    await expect(
      searchWordService.exec({
        query: {
          ...queryWithoutWordId,
          wordId: undefined as unknown as string,
        },
      })
    ).rejects.toThrow("Parameter is not a string: wordId");
  });
  it("the Request lenguage is required", async () => {
    const { lenguage, ...queryWithoutLenguage } = mock.searchWordSend.query;
    await expect(
      searchWordService.exec({
        query: {
          ...queryWithoutLenguage,
          lenguage: undefined as unknown as string,
        },
      })
    ).rejects.toThrow("Parameter is not a string: lenguage");
  });
});
