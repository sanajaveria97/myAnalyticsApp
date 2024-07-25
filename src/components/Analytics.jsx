import React from "react";
import Laptop from "../assets/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="bg-white max-w-[1240px] grid md:grid-cols-2 py-16 px-4 mx-auto items-center">
      <div className="">
        <img src={Laptop} alt="laptop image"></img>
      </div>

      <div className="bg-white text-black px-5 flex flex-col gap-2 justify-center">
        <p className="text-teal-500 font-bold">DATA ANALYTICS DASHBOARD</p>
        <h3 className="font-bold text-2xl md:text-4xl sm:text-3xl">
          Manage Data Analytics Centrally
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          reiciendis minima asperiores minus est expedita qui at, soluta eaque
          animi libero non fuga corporis, numquam, aliquid laboriosam repellat
          ex possimus?
        </p>
        <button className="bg-black py-3 px-7 text-teal-500 w-[200px] font-semibold rounded-md my-2">
          Get Started
        </button>
      </div>
    </div>
  );
};
