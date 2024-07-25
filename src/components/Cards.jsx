import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

export const Cards = () => {
  return (
    <div className="bg-white w-full text-black px-5 py-5">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <CardComponent
          image={Single}
          user={"Single User"}
          price={"$149"}
          storage={"500 GB Storage"}
          allowedUsers={"1 User Allowed"}
          sendUpto={"Send upto 2 GB"}
          btn={"bg-teal-500 text-black"}
        />
        <CardComponent
          image={Double}
          user={"Partnership"}
          price={"$199"}
          storage={"1 TB Storage"}
          allowedUsers={"3 Users Allowed"}
          sendUpto={"Send upto 10 GB"}
          bg={"bg-slate-100"}
          btn={"bg-black text-teal-500"}
        />

        <CardComponent
          image={Triple}
          user={"Group Account"}
          price={"$299"}
          storage={"5 TB Storage"}
          allowedUsers={"10 Users Allowed"}
          sendUpto={"Send upto 20 GB"}
          btn={"bg-teal-500 text-black"}
        />
      </div>
    </div>
  );
};

export const CardComponent = ({
  image,
  user,
  price,
  storage,
  allowedUsers,
  sendUpto,
  height,
  bg,
  btn,
}) => {
  return (
    <div>
      <div
        className={`${bg} w-full my-4 flex flex-col gap-2 py-4 px-6 items-center rounded-lg shadow-xl hover:cursor-pointer hover:scale-105 duration-300`}
      >
        <img width={80} height={height} src={image} alt={user}></img>
        <h3 className="font-bold  text-xl">{user}</h3>
        <h2 className="font-bold  text-2xl py-3">{price}</h2>
        <div className="w-full text-center">
          <p className="border-b  py-2 font-semibold">{storage}</p>
          <p className="border-b py-2  font-semibold">{allowedUsers}</p>
          <p className="border-b  py-2 font-semibold">{sendUpto}</p>
        </div>
        <button
          className={`${btn} py-3 px-7 w-[200px] mt-3 mb-3 text-black font-semibold rounded-md`}
        >
          Start Trial
        </button>
      </div>
    </div>
  );
};
