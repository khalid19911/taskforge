import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden 
                 w-full max-w-[180px] sm:max-w-[220px] md:max-w-xs 
                 hover:scale-105 transition-transform duration-300 mx-auto"
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={`${product.name} - ${product.color}`}
        className="w-full h-48 sm:h-56 md:h-64 object-contain"
      />

      {/* Product Info */}
      <div className="p-3 sm:p-4 flex flex-col items-center text-center space-y-1">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          {product.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-500">{product.color}</p>
        <p className="text-sm sm:text-base text-gray-600">£{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
