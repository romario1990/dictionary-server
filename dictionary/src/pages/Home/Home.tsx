import { useCallback, useEffect, useReducer } from "react";
import { CardError } from "../../components/CardError";
import { CardWord } from "../../components/CardWord";
import { OxfordProvider } from "../../services";
import { lexicalEntriesProps } from "./HomeProps";
import { initialState, reducer } from "./reducer";

const Home: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { word, error, definitions, loading } = state;

  const searchWord = useCallback(() => {
    if (word) {
      dispatch({
        type: "TOGGLE_LOADING",
      });
      OxfordProvider.getDefinitionsWord("en-gb", word)
        .then((data) => {
          if (data.error) {
            dispatch({
              type: "SET_ERROR",
              payload: {
                data: {
                  error: data.error,
                },
              },
            });
          } else {
            dispatch({
              type: "SET_DEFINITIONS",
              payload: {
                data: {
                  definitions: data,
                },
              },
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: "SET_ERROR",
            payload: {
              data: {
                error: "Connection error",
              },
            },
          });
        });
    }
  }, [word]);

  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_INITIAL_DATA",
      });
    };
  }, []);

  return (
    <section className="section">
      <>
        <input
          className="inputword"
          onChange={(e) =>
            dispatch({
              type: "SET_WORD",
              payload: {
                data: {
                  word: e.target.value,
                },
              },
            })
          }
        />
        <br />
        <button className="btn" onClick={searchWord}>
          Search
        </button>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            {error ? (
              <CardError error={error} />
            ) : (
              <>
                {definitions && (
                  <>
                    <h3>Word - {definitions?.word}</h3>
                    {definitions.results?.length > 0 &&
                      definitions.results[0].lexicalEntries.map(
                        (exicalEntry: lexicalEntriesProps, index: number) => (
                          <CardWord exicalEntry={exicalEntry} index={index} />
                        )
                      )}
                  </>
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
