import React from "react";
import ProductCard from "./ProductCard";

import PainShapedMeShirtGrey from "../assets/images/pain_shaped_me_grey.jpg";
import FlightKultureHoodieBlack from "../assets/images/flight_kulture_hoodie_black.jpg";
import FlightKultureJumperblue from "../assets/images/flight_kulture_hoodie_blue.jpg";
import PainKultureShirtWhite from "../assets/images/pain_kulture_shirt_white.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Pain Shaped Me Shirt",
    color: "Grey",
    price: 19.99,
    image: PainShapedMeShirtGrey,
    inventory: { S: 5, M: 2, L: 1 },
  },
  {
    id: 2,
    name: "Flight Kulture Hoodie",
    color: "Black",
    price: 19.99,
    image: FlightKultureHoodieBlack,
    inventory: { S: 3, M: 3, L: 1 },
  },
  {
    id: 3,
    name: "Flight Kulture Hoodie",
    color: "Black",
    price: 19.99,
    image: FlightKultureHoodieBlack,
    inventory: { S: 3, M: 3, L: 1 },
  },
  {
    id: 4,
    name: "Flight Kulture Hoodie",
    color: "Black",
    price: 19.99,
    image: FlightKultureHoodieBlack,
    inventory: { S: 3, M: 3, L: 1 },
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
