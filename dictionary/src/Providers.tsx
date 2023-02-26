import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routes";

const Providers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export { Providers };
