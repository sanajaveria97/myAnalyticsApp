import React from "react";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div>
      <div className="w-full h-screen mx-auto flex flex-col justify-center items-center text-center px-6">
        <p className="text-teal-500 font-bold ">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-7 sm:py-3 py-3">
          Grow with data.
        </h1>
        <p className="text-xl font-bold md:text-3xl sm:text-2xl pb-2 md:pb-3">
          Fast, flexible financing for{" "}
          <ReactTyped
            strings={["BTB", "BTC", "SASS"]}
            loop
            typeSpeed={120}
            backSpeed={140}
          />
        </p>
        <h3 className="text-gray-400 font-semibold md:text-xl pb-4">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </h3>
        <button className="bg-teal-500 py-3 px-7 text-black font-semibold rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};
