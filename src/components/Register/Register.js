import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const emailBlur = (event) => {
    setEmail(event.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const passwordBlur = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  const createUser = (event) => {
    console.log(email, password);
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("password did not match");
      return;
    }
    if (password < 6) {
      setError("Password must be 6 chareacters long");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="flex justify-center w-96 mx-auto mt-8 bg-[#f7f7f7] shadow-2xl p-4">
      <div>
        <h1 className="text-2xl mb-4 text-center">Register</h1>
        <form onSubmit={createUser}>
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
              name="password"
              id=""
              required
            />
          </div>
          <div className="flex flex-col mt-3 w-full">
            <label className="text-xl" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              onBlur={confirmPasswordBlur}
              className="border px-2 py-1 outline-0"
              type="password"
              name="confirmpassword"
              id=""
              required
            />
          </div>
          <p className="text-red-500">{error}</p>
          <input
            className="w-full bg-yellow-600 mt-6 px-2 py-1 text-2xl hover:bg-indigo-400"
            type="submit"
            value="Register"
          />
        </form>
        <p className="mt-6">
          Already have an acount?{" "}
          <Link className="text-indigo-500 underline" to="/login">
            Login
          </Link>
        </p>
        <button className="mt-6 px-2 py-1 text-xl bg-white w-full text-yellow-800">
          Connect With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
