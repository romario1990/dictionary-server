import { useCallback, useEffect, useState } from "react";
import { CardError } from "../../components/CardError";
import { CardWord } from "../../components/CardWord";
import { OxfordProvider } from "../../services";
import { OxfordDictionaryProps } from "./HomeProps";

const Home: React.FC = () => {
  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState<OxfordDictionaryProps>();
  const [error, setError] = useState<string>();

  const searchWord = useCallback(() => {
    if (word) {
      OxfordProvider.getDefinitionsWord("en-gb", word)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setError(undefined);
            setDefinitions(data);
          }
        })
        .catch((err) => {
          setDefinitions(undefined);
        });
    }
  }, [word]);

  useEffect(() => {
    return () => {
      setDefinitions(undefined);
      setError(undefined);
    };
  }, []);

  return (
    <section className="section">
      <>
        <input
          className="inputword"
          onChange={(e) => setWord(e.target.value)}
        />
        <br />
        <button className="btn" onClick={searchWord}>
          Search
        </button>
        {error ? (
          <CardError error={error} />
        ) : (
          <>
            {definitions && (
              <>
                <h3>Word - {definitions?.word}</h3>
                {definitions.results?.length > 0 &&
                  definitions.results[0].lexicalEntries.map(
                    (exicalEntry, index) => (
                      <CardWord exicalEntry={exicalEntry} index={index} />
                    )
                  )}
              </>
            )}
          </>
        )}
      </>
    </section>
  );
};

export { Home };
