import React from "react";
import LogoImage from "../assets/images/pain_kulture_logo.png";

const listItems = ["Home", "Shop", "About"];

const Navbar = () => {
  return (
    <div
      className="fixed top-3 left-1/2 -translate-x-1/2 flex justify-between items-center 
      w-full  py-4 px-20 rounded-full  bg-opacity-60 text-white  z-10"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img
          src={LogoImage} // <-- replace with your image path
          alt="Logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Right: Navigation Links + Button */}
      <div className="flex items-center gap-10">
        <ul className="flex gap-13 text-xl">
          {listItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-yellow-300 transition cursor-pointer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="bg-yellow-300 text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
