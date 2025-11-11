import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to="/product" state={{ product }} className="block">
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden 
                   w-full max-w-xs mx-auto transition-transform duration-300 
                   hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
      >
        {/* Product Image */}
        <img
          src={product.image}
          alt={`${product.name} - ${product.color}`}
          className="w-full h-64 sm:h-72 md:h-80 object-contain"
        />

        {/* Product Info */}
        <div className="p-3 flex flex-col items-start text-left space-y-1">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-500">{product.color}</p>
          <p className="text-base sm:text-lg font-medium text-gray-700">
            £{product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
