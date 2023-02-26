import { lexicalEntriesProps } from "../../pages/Home/HomeProps";

const CardWord: React.FC<{
  index: number;
  exicalEntry: lexicalEntriesProps;
}> = ({ index, exicalEntry }) => {
  return (
    <section className="subsection">
      <>
        <h4>Definition - {index + 1}</h4>
        <h5>Lexical Category - {exicalEntry.lexicalCategory.text}</h5>
        {exicalEntry.entries[0].senses.map((sense) => {
          return (
            <>
              {sense.definitions?.length > 0 &&
                sense.definitions.map((definition) => {
                  return (
                    <>
                      <div
                        style={{
                          borderBottom: "2px solid #ababab",
                          margin: "10px 0px",
                        }}
                      />
                      <h5>Word definition description</h5>
                      <p>{definition}</p>
                    </>
                  );
                })}
              {sense?.examples?.length > 0 && (
                <>
                  <h5>Example</h5>
                  <p>{sense.examples?.length > 0 && sense.examples[0].text}</p>
                </>
              )}
            </>
          );
        })}
      </>
    </section>
  );
};
export { CardWord };
