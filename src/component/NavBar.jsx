import { NavLink, useLocation } from "react-router-dom";
import LgNavButtons from "./lgNavButtons";
import SmNavBarButtons from "./SmNavBarButtons";
import { useState } from "react";

function NavBar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname.includes("category");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`lg:max-w-screen-xl lg:mx-auto p-2 pb-0 mt-2 relative ${
        isHome ? " border border-gray-700/30 border-b-0 rounded-t-2xl" : ""
      }`}
    >
      <div
        className={` px-4 pt-3 rounded-t-2xl ${
          isHome ? "bg-purple-700 text-white" : "bg-white text-black"
        }`}
      >
        <div className="w-full lg:max-w-screen-lg lg:mx-auto flex items-center justify-between">
          <NavLink
            className="lg:text-xl text-2xl color-white font-bold "
            to="/"
          >
            Gadget Heaven
          </NavLink>
          <>
            <LgNavButtons isHome={isHome} />
            <SmNavBarButtons
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              isHome={isHome}
            />
          </>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
