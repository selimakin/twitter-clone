import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";

const Register = () => {
  return (
    <div className="absolute flex flex-col py-10 -translate-x-1/2 -translate-y-1/2 bg-white px-28 top-1/2 left-1/2 rounded-2xl gap-y-10">
      <TwitterIcon className="text-4xl text-blue-400 ml-28" />
      <h1 className="text-4xl font-semibold">Join Twitter today</h1>
      <form className="flex flex-col gap-y-6">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border-2 rounded-lg focus:outline-none focus:border-blue-400"
        />
        <input
          type="text"
          placeholder="Username"
          className="p-2 border-2 rounded-lg focus:outline-none focus:border-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border-2 rounded-lg focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className="p-2 text-white transition-all bg-blue-400 rounded-lg duration-400 hover:bg-blue-500"
        >
          Sign up
        </button>
      </form>
      <p>
        Have an account already?{" "}
        <span className="text-blue-400 transition-all cursor-pointer hover:text-blue-500 duration-400">
          Log in
        </span>
      </p>
    </div>
  );
};

export default Register;
