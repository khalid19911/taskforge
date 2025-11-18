import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Pick main image (default to first one)
  const mainImage = product.images?.[currentImageIndex] || product.image;

  return (
    <Link to="/product" state={{ product }} className="block">
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden 
                   w-full max-w-xs mx-auto transition-transform duration-300 
                   hover:scale-105 hover:-translate-y-1 hover:shadow-2xl
                   flex flex-col"
      >
        {/* Product Image */}
        <div className="w-full aspect-[4/5] relative bg-gray-100 flex items-center justify-center">
          <img
            src={mainImage}
            alt={`${product.name} - ${product.color}`}
            className="w-full h-full object-contain"
          />
          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  className={`w-8 h-8 rounded border ${
                    idx === currentImageIndex
                      ? "border-yellow-400"
                      : "border-gray-300"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImageIndex(idx);
                  }}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-3 flex flex-col flex-1 justify-between">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500">{product.color}</p>
            <p className="text-base sm:text-lg font-medium text-gray-700">
              £{product.price.toFixed(2)}
            </p>
          </div>

          {/* Sizes and stock 
          <div className="mt-2 flex flex-wrap gap-2">
            {product.inventory &&
              Object.entries(product.inventory).map(([size, stock]) => (
                <div
                  key={size}
                  className={`px-2 py-1 text-xs border rounded ${
                    stock > 0
                      ? "border-gray-800 text-gray-800"
                      : "border-red-400 text-red-400 line-through"
                  }`}
                >
                  // {size} ({stock})
                </div>
              ))}
          </div>*/}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
