import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
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
    <nav className="fixed flex items-center justify-between py-3 px-6 bg-black/20 text-white z-50 w-full">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img src={LogoImage} alt="Logo" className="w-14 h-14 object-contain" />
      </div>

      {/* Center Menu (desktop) */}
      <ul className="hidden md:flex items-center gap-10 text-lg absolute left-1/2 -translate-x-1/2">
        {listItems.map((item) => (
          <li key={item.name}>
            <Link to={item.path} className="hover:text-yellow-300 transition">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Icons (desktop) */}
      <div className="hidden md:flex items-center gap-6">
        <button className="hover:text-yellow-300 transition">
          <BsBag size={23} />
        </button>

        <Link to="/login" className="hover:text-yellow-300 transition">
          <IoPersonOutline size={25} />
        </Link>
      </div>

      {/* Right: Mobile menu & bag */}
      <div className="flex items-center gap-4 md:hidden">
        <button>
          <BsBag size={20} />
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
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
