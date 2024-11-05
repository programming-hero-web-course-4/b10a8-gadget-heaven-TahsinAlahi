import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useGadgetContext } from "../contexts/GadgetContext";
import LgNavButtons from "./lgNavButtons";

function NavBar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname.includes("category");

  return (
    <nav
      className={`lg:max-w-screen-xl lg:mx-auto p-2 pb-0 mt-2 ${
        isHome ? " border border-gray-700/30 border-b-0 rounded-t-2xl" : ""
      }`}
    >
      <div
        className={` px-4 pt-3 rounded-t-2xl ${
          isHome ? "bg-purple-700 text-white" : "bg-white text-black"
        }`}
      >
        <div className="w-full lg:max-w-screen-lg lg:mx-auto flex items-center justify-between">
          <NavLink className="text-xl color-white font-bold" to="/">
            Gadget Heaven
          </NavLink>
          <>
            <LgNavButtons />
          </>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
