import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppLayout() {
  return (
    <div className="font-sora">
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
        transition:Bounce
        stacked={true}
      />
    </div>
  );
}

export default AppLayout;
