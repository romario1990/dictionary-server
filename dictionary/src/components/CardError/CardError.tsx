const CardError: React.FC<{ error: string }> = ({ error }) => {
  return (
    <>
      <h3>Error</h3>
      <section className="subsection">
        <h4>Error</h4>
        <p>{error}</p>
      </section>
    </>
  );
};

export { CardError };
