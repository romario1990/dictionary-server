import { Link } from "react-router-dom";

const About: React.FC = () => (
  <section className="section">
    <h4>Oxford API Project</h4>
    <p>Find word definitions and improve your vocabulary.</p>
    <Link to="/" className="btn">
      Back Home
    </Link>
  </section>
);

export { About };
