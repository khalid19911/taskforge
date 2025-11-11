import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) return <p className="text-white">Product not found</p>;

  const sizes = product.inventory ? Object.keys(product.inventory) : [];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-black text-white min-h-screen justify-center px-4 flex flex-col items-center">
      {/* Product Content */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Product Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          {/* Back Button on top of details */}

          <h1 className="text-2xl font-bold wrap-break-word md:break-normal">
            {product.name}
          </h1>
          <p className="text-xl text-gray-400">{product.color}</p>
          <p className="text-2xl font-semibold">£{product.price}</p>

          {/* Sizes */}
          {sizes.length > 0 && (
            <div className="flex gap-3 mt-4 justify-center md:justify-start flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`px-4 py-2 border border-white rounded ${
                    selectedSize === size
                      ? "bg-blue-500 text-white"
                      : product.inventory[size] === 0
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          {/* Add to Cart */}
          <button
            disabled={!selectedSize}
            className={`mt-6 w-40 py-2 rounded-lg text-white ${
              selectedSize
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-700 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>

          {/* Inventory info */}
          {selectedSize && (
            <p className="text-sm text-gray-400 mt-2">
              {product.inventory[selectedSize]} left in stock
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
