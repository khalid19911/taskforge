import React from "react";
import { Link } from "react-router-dom";
import PainShapedMeShirtGrey from "../assets/images/pain_shaped_me_grey.jpg";

import ProductCard from "../components/ProductCard";
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
    image: PainShapedMeShirtGrey,
  },
  {
    id: 3,
    name: "Flight Kulture Jumper",
    color: "Blue",
    price: 19.99,
    image: PainShapedMeShirtGrey,
  },
  {
    id: 4,
    name: "Pain Kulture Shirt",
    color: "White",
    price: 19.99,
    image: PainShapedMeShirtGrey,
  },
];
const Shop = () => {
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

export default Shop;
