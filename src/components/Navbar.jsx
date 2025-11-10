import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "../assets/images/pain_kulture_logo.png";
import { Link } from "react-router-dom";

const listItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-3 left-1/2 -translate-x-1/2 flex items-center justify-between 
      w-[90%] max-w-6xl py-3 px-6 rounded-full bg-black/60 backdrop-blur-md text-white z-50 w-full"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img src={LogoImage} alt="Logo" className="w-14 h-14 object-contain" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-lg">
        {listItems.map((item) => (
          <li key={item.name}>
            <Link to={item.path} className="hover:text-yellow-300 transition">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button (desktop only) */}
      <Link
        to="/login"
        className="hidden md:block bg-white text-black px-5 py-2 rounded-full hover:bg-gray-400 transition"
      >
        Log In
      </Link>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl focus:outline-none bg-transparent"
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
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/login"
            className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
