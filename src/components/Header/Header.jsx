import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="bg-cyan-500 h-20 md:h-16 md:px-24 md:flex md:justify-between md:items-center text-center md:sticky top-0 z-10">
      <div className="text-center">
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <div className="text-white font-semibold text-xl">
        <Link className="mr-3 hover:text-slate-300" to="/">
          Home
        </Link>
        <Link className="mr-3 hover:text-slate-300" to="/shop">
          Shop
        </Link>
        <Link className="mr-3 hover:text-slate-300" to="/orders">
          Orders
        </Link>
      </div>
    </nav>
  );
};

export default Header;
