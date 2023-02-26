type metadataProps = {
  operation: string;
  provider: string;
  schema: string;
};

type senseProps = {
  definitions: Array<string>;
  examples: any;
  id: string;
};

type sensesProps = {
  definitions: Array<string>;
  examples: any;
  id: string;
  subsenses: Array<senseProps>;
};

type entriesProps = {
  senses: Array<sensesProps>;
};

type lexicalCategoryProps = {
  id: string;
  text: string;
};

type lexicalEntriesProps = {
  entries: Array<entriesProps>;
  language: string;
  lexicalCategory: lexicalCategoryProps;
  text: string;
};

type resultsProps = {
  id: string;
  language: string;
  lexicalEntries: Array<lexicalEntriesProps>;
  type: string;
  word: string;
};

type OxfordDictionaryModel = {
  id: string;
  word: string;
  metadata: metadataProps;
  results: Array<resultsProps>;
};

export { OxfordDictionaryModel };
