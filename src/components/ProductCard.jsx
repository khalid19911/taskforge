import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64 hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <img
        src={product.image}
        alt={`${product.name} - ${product.color}`}
        className="w-full h-64 object-contain"
      />

      {/* Product Info */}
      <div className="p-2 flex flex-col items-start text-center space-y-.5">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-500">{product.color}</p>
        <p className="text-gray-600">£{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
