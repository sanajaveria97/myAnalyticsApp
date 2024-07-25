import React, { useState } from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleToggle() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="text-white flex justify-between mx-auto px-5 max-w-[1240px] items-center h-20">
      <h1 className="font-semibold text-3xl text-teal-500">REACT.</h1>
      <ul className="  hidden md:flex">
        <li className="p-4  hover:underline  hover:cursor-pointer">HOME</li>
        <li className="p-4  hover:underline hover:cursor-pointer">COMPANY</li>
        <li className="p-4 hover:underline  hover:cursor-pointer">RESOURCES</li>
        <li className="p-4 hover:underline  hover:cursor-pointer">ABOUT</li>
        <li className="p-4 hover:underline  hover:cursor-pointer">CONTACT</li>
      </ul>
      <button onClick={handleToggle} className="md:hidden">
        {menuOpen ? <IoClose size={20} /> : <IoMenuSharp size={20} />}
      </button>

      <div
        className={
          menuOpen
            ? "fixed top-0 left-0 w-3/5 h-full mt-20 ease-in-out duration-500 md:hidden bg-black"
            : "fixed left-[-100%]"
        }
      >
        <ul>
          <li className="p-4 border-b  border-gray-400  hover:cursor-pointer">
            HOME
          </li>
          <li className="p-4 border-b border-gray-400 hover:cursor-pointer">
            COMPANY
          </li>
          <li className="p-4 border-b border-gray-400 hover:cursor-pointer">
            RESOURCES
          </li>
          <li className="p-4 border-b border-gray-400 hover:cursor-pointer">
            ABOUT
          </li>
          <li className="p-4 hover:cursor-pointer">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
