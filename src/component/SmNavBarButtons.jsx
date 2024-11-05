import { NavLink } from "react-router-dom";
import burgerImg from "../assets/burger.png";

function SmNavBarButtons({ isMenuOpen, setIsMenuOpen }) {
  function handleMenuClick() {
    if (isMenuOpen) setIsMenuOpen(false);
    else setIsMenuOpen(true);
  }
  return (
    <div className="lg:hidden">
      <div className="mr-2" onClick={handleMenuClick}>
        <img src={burgerImg} alt="Menus" className="w-7" />
      </div>

      {isMenuOpen && (
        <div className="absolute bg-white z-10 w-screen left-0 top-0 h-dvh flex flex-col items-center gap-5">
          <div className="mr-2 mb-4" onClick={handleMenuClick}>
            <img src={burgerImg} alt="Menus" className="w-7" />
          </div>
          <ul className="w-full flex flex-col items-center justify-around gap-5 text-xl text-black underline">
            <NavLink to="/" onClick={handleMenuClick}>
              Home
            </NavLink>
            <NavLink to="/statistic" onClick={handleMenuClick}>
              Statistic
            </NavLink>
            <NavLink to="/dashboard" onClick={handleMenuClick}>
              Dashboard
            </NavLink>
            <NavLink to="/contact" onClick={handleMenuClick}>
              Contact Us
            </NavLink>
            <NavLink to="/dashboard/cart" onClick={handleMenuClick}>
              Cart
            </NavLink>
            <NavLink to="/dashboard/wishlist" onClick={handleMenuClick}>
              Wishlist
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SmNavBarButtons;
