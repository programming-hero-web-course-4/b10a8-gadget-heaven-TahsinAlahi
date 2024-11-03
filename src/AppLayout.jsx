import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
