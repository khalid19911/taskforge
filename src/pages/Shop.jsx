import React from "react";
import ProductCard from "../components/ProductCard";

import PainShapedMeShirtGrey from "../assets/images/pain_shaped_me_grey.jpg";
import FlightKultureHoodieBlack from "../assets/images/flight_kulture_hoodie_black.jpg";
import FlightKultureJumperBlue from "../assets/images/flight_kulture_hoodie_blue.jpg";
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
    name: "Flight Kulture Jumper",
    color: "Blue",
    price: 19.99,
    image: FlightKultureJumperBlue,
    inventory: { S: 2, M: 1, L: 0 },
  },
  {
    id: 4,
    name: "Pain Kulture Shirt",
    color: "White",
    price: 19.99,
    image: PainKultureShirtWhite,
    inventory: { S: 4, M: 2, L: 2 },
  },
];

const Shop = () => {
  return (
    <div className="bg-black text-white py-16 px-5">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
          PRODUCTS
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mt-2 rounded mx-auto md:mx-0"></div>
      </div>

      {/* Product Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
           gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
      >
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
