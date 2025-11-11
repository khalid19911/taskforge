import React from "react";
import HeroImage from "../assets/images/hero_picture.jpg";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col items-center justify-center  text-white pt-20 md:pt-20">
      {/* About Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-6 md:gap-12 flex-1">
        {/* About Text */}
        <div className="flex-1 md:flex-[0.5] flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            About Us
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            volutpat, massa a dictum consequat, purus libero sollicitudin risus,
            ac luctus justo orci in sapien. Donec vel turpis nec arcu malesuada
            efficitur.
          </p>
        </div>

        {/* About Image */}
        <div className="flex- md:flex-[0.5] flex justify-center">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-sm md:max-w-lg h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Newsletter at the bottom */}
      <div className="w-full">
        <Newsletter />
      </div>
    </div>
  );
};

export default About;
