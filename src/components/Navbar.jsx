import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <h1 className="text-blue-400 text-3xl font-bold cursor-pointer">
        MOVIE APP{" "}
      </h1>
      <div>
        <button className="text-white px-4 py-2 mx-2 rounded cursor-pointer bg-red-400 text-center">
          Sign In
        </button>
        <button className="bg-blue-400 px-6 py-2 rounded cursor-pointer text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
