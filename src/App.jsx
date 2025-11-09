import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import HeroImage from "./assets/images/hero_picture.jpg";
import LogoImage from "./assets/images/pain_kulture_logo.png";

import ProductCard from "./components/ProductCard.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";

import Newsletter from "./components/Newsletter.jsx";
function App() {
  return (
    <>
      <Navbar />
      <div className="bg-black w-full flex flex-col items-center justify-center text-center md:text-left md:p-23">
        <img
          src={LogoImage}
          alt="PainKulture Logo"
          className="md:w-120 h-auto object-contain"
        />
      </div>

      <div className="bg-black w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-6 md:p-24 text-white">
        {/* About Text */}
        <div className="flex-1 md:flex-[0.4] flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vehicula condimentum orci, at placerat lorem eleifend vitae. Aenean
            vel mattis neque, vitae porttitor arcu. Phasellus efficitur eros sed
            metus convallis, nec porttitor magna auctor. Suspendisse
            ullamcorper, sapien sit amet consectetur efficitur, mauris arcu
            eleifend ex, ac hendrerit ante enim non eros. Etiam consequat ante
            tortor, vel accumsan tellus lacinia et. Pellentesque faucibus, est
            vel semper finibus, tellus diam tincidunt eros, ut mollis massa
            justo et massa. Nunc sit amet ligula vitae odio porttitor tristique
            elementum id lorem.
          </p>
        </div>

        {/* About Image */}
        <div className="flex-1 md:flex-[0.6] flex justify-center">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-sm md:max-w-2xl h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      <div className="bg-black w-full relative flex items-center justify-center text-center flex-col gap-10 p-10 text-white ">
        <h1 className="text-7xl">EXPLORE OUR COLLECTION</h1>
        <FeaturedProducts />
      </div>
      <Newsletter />
    </>
  );
}

export default App;
