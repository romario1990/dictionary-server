import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/StyledNavbar";

const SharedLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export { SharedLayout };
