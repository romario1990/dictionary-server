import { Route, Routes } from "react-router-dom";
import { About, Home, SharedLayout } from "../pages";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export { Routers };
