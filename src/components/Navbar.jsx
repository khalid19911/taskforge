import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "../assets/images/pain_kulture_logo.png";

const listItems = ["Home", "Shop", "About"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-3 left-1/2 -translate-x-1/2 flex items-center justify-between 
      w-[90%] max-w-6xl py-3 px-6 rounded-full bg-black/60 backdrop-blur-md text-white z-50"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-3 ">
        <img src={LogoImage} alt="Logo" className="w-14 h-14 object-contain" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-lg">
        {listItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-300 transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Login Button (desktop only) */}
      <button className="hidden md:block bg-yellow-300 text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition">
        Log In
      </button>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl focus:outline-none bg-transparent "
      >
        {isOpen ? (
          <FaTimes className="bg-transparent" />
        ) : (
          <FaBars className="bg-transparent" />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg py-6 flex flex-col items-center gap-6 text-lg md:hidden">
          {listItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition">
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
