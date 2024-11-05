import { NavLink, useNavigate } from "react-router-dom";
import cartImg from "../assets/cart_black.png";
import wishlistImg from "../assets/wishlist.png";
import { useGadgetContext } from "../contexts/GadgetContext";

function LgNavButtons({ isHome }) {
  const navigate = useNavigate();
  const { cart, wishlist } = useGadgetContext();

  const NavButtonClass = `${
    isHome
      ? "hover:bg-purple-800"
      : "hover:bg-gray-400/20 text-gray-800 font-medium"
  } px-4 py-1 rounded-lg`;

  const navSideButtonClass = `flex items-center justify-center p-3 border border-gray-500/20 rounded-full bg-white cursor-pointer relative ${
    isHome ? "hover:bg-purple-200" : "hover:bg-gray-400/20"
  }`;

  return (
    <>
      <div
        className={`lg:flex gap-2 items-center  hidden ${
          isHome ? "" : "text-gray-500"
        }`}
      >
        <NavLink to="/" className={NavButtonClass}>
          Home
        </NavLink>
        <NavLink to="/statistic" className={NavButtonClass}>
          Statistic
        </NavLink>
        <NavLink to="/dashboard" className={NavButtonClass}>
          Dashboard
        </NavLink>
        <NavLink to="/contact" className={NavButtonClass}>
          Contact Us
        </NavLink>
      </div>
      <div className="lg:flex hidden items-center justify-center gap-4">
        <div
          className={navSideButtonClass}
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
          className={navSideButtonClass}
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
    </>
  );
}

export default LgNavButtons;
