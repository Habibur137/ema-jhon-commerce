import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center w-96 mx-auto mt-8 bg-[#f7f7f7] shadow-2xl p-4">
      <div>
        <h1 className="text-2xl mb-4 text-center">Login</h1>
        <form>
          <div className="flex flex-col w-full">
            <label className="text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="border px-2 py-1 outline-0"
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="flex flex-col mt-3 w-full">
            <label className="text-xl" htmlFor="password">
              Password
            </label>
            <input
              className="border px-2 py-1 outline-0"
              type="password"
              name="email"
              id=""
              required
            />
          </div>
          <input
            className="w-full bg-yellow-600 mt-6 px-2 py-1 text-2xl"
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-6">
          New To Emajhon?{" "}
          <Link className="text-indigo-500 underline" to="/register">
            Create An Acount
          </Link>
        </p>
        <button className="mt-6 px-2 py-1 text-xl bg-white w-full text-yellow-800">
          Connect With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
