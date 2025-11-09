import React from "react";
import ProductCard from "./ProductCard";

import PainShapedMeShirtGrey from "../assets/images/pain_shaped_me_grey.jpg";
import FlightKultureHoodieBlack from "../assets/images/flight_kulture_hoodie_black.jpg";
import FlightKultureJumperblue from "../assets/images/flight_kulture_hoodie_blue.jpg";
import PainKultureShirtWhite from "../assets/images/pain_kulture_shirt_white.jpg";

// Example featured products array
const featuredProducts = [
  {
    id: 1,
    name: "Pain Shaped Me Shirt",
    color: "Grey",
    price: 19.99,
    image: PainShapedMeShirtGrey,
  },
  {
    id: 2,
    name: "Flight Kulture Hoodie",
    color: "Black",
    price: 19.99,
    image: FlightKultureHoodieBlack,
  },
  {
    id: 3,
    name: "Flight Kulture Jumper",
    color: "Blue",
    price: 19.99,
    image: FlightKultureJumperblue,
  },
  {
    id: 4,
    name: "Pain Kulture Shirt",
    color: "White",
    price: 19.99,
    image: PainKultureShirtWhite,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-6xl">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
