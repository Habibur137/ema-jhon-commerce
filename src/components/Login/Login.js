import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (user) {
    navigate("/shop");
  }
  const emailBlur = (event) => {
    setEmail(event.target.value);
  };
  const passwordBlur = (event) => {
    setPassword(event.target.value);
  };
  const signInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="flex justify-center w-96 mx-auto mt-8 bg-[#f7f7f7] shadow-2xl p-4">
      <div>
        <h1 className="text-2xl mb-4 text-center">Login</h1>
        <form onSubmit={signInUser}>
          <div className="flex flex-col w-full">
            <label className="text-xl" htmlFor="email">
              Email
            </label>
            <input
              onBlur={emailBlur}
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
              onBlur={passwordBlur}
              className="border px-2 py-1 outline-0"
              type="password"
              name="email"
              id=""
              required
            />
          </div>
          <p>
            {error?.message}
            {loading && <p>Loading.....</p>}
          </p>
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
