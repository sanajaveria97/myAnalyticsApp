import React from "react";

export const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] grid lg:grid-cols-3 mx-auto  px-3 gap-2 items-center">
        <div className="lg:col-span-2">
          <h3 className="font-bold text-2xl md:text-4xl sm:text-3xl py-2">
            Want tips & tricks to optimize your flow?
          </h3>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full">
            <input
              className="mt-3 mb-3 p-2 rounded-md w-full"
              type="email"
              placeholder="Enter your email"
            ></input>

            <button className="bg-teal-500 py-2 px-7 text-black font-semibold rounded-md  w-[200px]">
              Notify me
            </button>
          </div>

          <p className="pt-2">
            We care about the protection of your data. Read our{" "}
            <a className="text-teal-500 underline" href="">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
