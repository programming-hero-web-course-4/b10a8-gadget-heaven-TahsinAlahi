import { NavLink, useLocation, useNavigate } from "react-router-dom";
import cartImg from "../assets/cart_black.png";
import wishlistImg from "../assets/wishlist.png";
import { useGadgetContext } from "../contexts/GadgetContext";

function NavBar() {
  const { pathname } = useLocation();
  const isHome = pathname.includes("category");
  const navigate = useNavigate();
  const { cart, wishlist } = useGadgetContext();

  return (
    <nav
      className={`lg:max-w-screen-lg lg:mx-auto p-2 pb-0 mt-2 ${
        isHome ? " border border-gray-700/30 border-b-0 rounded-t-lg" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 pt-3 ${
          isHome ? "bg-purple-700 text-white" : "bg-white text-black"
        }`}
      >
        <NavLink
          className="text-xl color-white font-bold cursor-pointer"
          to="/"
        >
          Gadget Heaven
        </NavLink>
        <div
          className={`flex gap-2 items-center ${isHome ? "" : "text-gray-500"}`}
        >
          <NavLink
            to="/"
            className={`${
              isHome
                ? "hover:bg-purple-800"
                : "hover:bg-gray-400/20 text-gray-800 font-medium"
            } px-4 py-1 rounded-lg`}
          >
            Home
          </NavLink>
          <NavLink
            to="/statistic"
            className={`${
              isHome
                ? "hover:bg-purple-800"
                : "hover:bg-gray-400/20 text-gray-800 font-medium"
            } px-4 py-1 rounded-lg`}
          >
            Statistic
          </NavLink>
          <NavLink
            to="/dashboard"
            className={`${
              isHome
                ? "hover:bg-purple-800"
                : "hover:bg-gray-400/20 text-gray-800 font-medium"
            } px-4 py-1 rounded-lg`}
          >
            Dashboard
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div
            className={`flex items-center justify-center p-3 border border-gray-500/20 rounded-full bg-white cursor-pointer relative ${
              isHome ? "hover:bg-purple-200" : "hover:bg-gray-400/20"
            }`}
            onClick={() => navigate("/dashboard/cart")}
          >
            {cart && (
              <div className="absolute -top-2 -right-2 bg-red-600 text-white px-2 w-fit rounded-full text-center">
                {cart.length}
              </div>
            )}
            <img src={cartImg} alt="Cart" className="w-5 aspect-square" />
          </div>
          <div
            className={`flex items-center justify-center p-3 border border-gray-500/20 rounded-full bg-white cursor-pointer relative ${
              isHome ? "hover:bg-purple-200" : "hover:bg-gray-400/20"
            }`}
            onClick={() => navigate("/dashboard/wishlist")}
          >
            {wishlist && (
              <div className="absolute -top-2 -right-2 bg-red-600 text-white px-2 w-fit rounded-full text-center">
                {wishlist.length}
              </div>
            )}
            <img
              src={wishlistImg}
              alt="Wish list "
              className="w-5 aspect-square"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
