import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="bg-cyan-500 h-20 md:h-16 md:px-24 md:flex md:justify-between md:items-center text-center md:sticky top-0 z-10">
      <div className="text-center">
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <div className="text-white font-semibold text-xl">
        <a className="mr-3 hover:text-slate-300" href="/home">
          Shop
        </a>
        <a className="mr-3 hover:text-slate-300" href="#">
          Orders
        </a>
        <a className="mr-3 hover:text-slate-300" href="#">
          Inventory
        </a>
        <a className=" hover:text-slate-300" href="#">
          About
        </a>
      </div>
    </nav>
  );
};

export default Header;
