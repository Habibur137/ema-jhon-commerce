import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";

const Header = () => {
  const [user] = useAuthState(auth);
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
        {user ? (
          <button onClick={() => signOut(auth)}>Log Out</button>
        ) : (
          <Link className="mr-3 hover:text-slate-300" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
