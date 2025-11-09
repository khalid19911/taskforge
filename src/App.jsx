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
      <div className="bg-black w-full flex flex-col items-center justify-center text-center md:text-left md:p-24">
        <img
          src={LogoImage}
          alt="PainKulture Logo"
          className="md:w-120 h-auto object-contain"
        />
        <h1
          className="mt-[-50px] text-4xl text-white"
          style={{ fontFamily: "'Montserrat'" }}
        >
          "Pain Shaped Me"
        </h1>
      </div>

      <div className="bg-black w-full flex flex-col md:flex-row items-center justify-center gap-0 p-1 md:p-24 text-white">
        {/* About Text */}
        <div className="flex-1 md:flex-[0.4] flex flex-col justify-center text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            About Us
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vehicula condimentum orci, at placerat lorem eleifend vitae. Aenean
            vel mattis neque, vitae porttitor arcu. Phasellus efficitur eros sed
            metus convallis, nec porttitor magna auctor. Suspendisse
            ullamcorper, sapien sit amet consectetur efficitur, mauris arcu
            eleifend ex, ac hendrerit ante enim non eros. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Etiam consequat ante tortor, vel accumsan tellus lacinia
            et. Pellentesque faucibus, est vel semper finibus, tellus diam
            tincidunt eros, ut mollis massa justo et massa. Nunc sit amet ligula
            vitae odio porttitor tristique elementum id lorem. Nam imperdiet
            quam eu ultrices pulvinar.
          </p>
        </div>
        {/* About Image */}
        <div className="flex-1 md:flex-[0.6] flex justify-center">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-md md:max-w-2xl h-auto object-contain rounded-lg "
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
