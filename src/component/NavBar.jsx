import { NavLink } from "react-router-dom";
import cartImg from "../assets/cart.png";
import wishlistImg from "../assets/wishlist.png";

function NavBar() {
  return (
    <nav className="flex items-center justify-between lg:max-w-screen-lg lg:mx-auto text-white pt-5">
      <NavLink className="text-xl color-white font-bold cursor-pointer" to="/">
        Gadget Heaven
      </NavLink>
      <div className="flex gap-4 items-center text-gray-100">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/statistic">Statistic</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
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
