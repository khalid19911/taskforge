import { FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import LogoImage from "../assets/images/pain_kulture_logo.png";
const Newsletter = () => {
  return (
    <div className="bg-black w-full py-10 px-10 flex flex-col items-center justify-center text-white gap-4">
      {/* Logo */}
      <img
        src={LogoImage}
        alt="PainKulture Logo"
        className="w-14 h-14 object-contain"
      />

      {/* Social Icons */}
      <div className="flex gap-6 text-2xl">
        <a
          href="https://www.instagram.com/painkultureldn/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@painkultureldn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <FaTiktok />
        </a>
        <a
          href="mailto:contact@painkulture.com?subject=PainKulture%20Inquiry&body=Hi%20PainKulture%20Team,"
          className="hover:text-yellow-400 transition"
        >
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Newsletter;
