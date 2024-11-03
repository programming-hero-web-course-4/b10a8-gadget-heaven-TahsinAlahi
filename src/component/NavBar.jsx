import { NavLink, useLocation } from "react-router-dom";
import cartImg from "../assets/cart.png";
import wishlistImg from "../assets/wishlist.png";

function NavBar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav
      className={`flex items-center justify-between lg:max-w-screen-lg lg:mx-auto ${
        isHome ? "" : "bg-white text-black"
      } pt-5`}
    >
      <NavLink className="text-xl color-white font-bold cursor-pointer" to="/">
        Gadget Heaven
      </NavLink>
      <div
        className={`flex gap-2 items-center ${isHome ? "" : "text-gray-500"}`}
      >
        <NavLink
          to="/"
          className={`${
            isHome ? "" : "hover:bg-gray-400/20 text-gray-800 font-medium"
          } px-4 py-1 rounded-lg`}
        >
          Home
        </NavLink>
        <NavLink
          to="/statistic"
          className={`${
            isHome ? "" : "hover:bg-gray-400/20 text-gray-800 font-medium"
          } px-4 py-1 rounded-lg`}
        >
          Statistic
        </NavLink>
        <NavLink
          to="/dashboard"
          className={`${
            isHome ? "" : "hover:bg-gray-400/20 text-gray-800 font-medium"
          } px-4 py-1 rounded-lg`}
        >
          Dashboard
        </NavLink>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center p-3 border border-gray-500/20 rounded-full bg-white cursor-pointer hover:bg-gray-400/20">
          <img src={cartImg} alt="Cart" className="w-5 aspect-square" />
        </div>
        <div className="flex items-center justify-center p-3 border border-gray-500/20 rounded-full bg-white cursor-pointer hover:bg-gray-400/20">
          <img
            src={wishlistImg}
            alt="Wish list "
            className="w-5 aspect-square"
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
