import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [selectedSize, setSelectedSize] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { addToCart } = useCart(); // 👈 use global cart

  if (!product) return <p className="text-white">Product not found</p>;

  const sizes = product.inventory ? Object.keys(product.inventory) : [];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setDrawerOpen(true); // optionally auto-open cart drawer
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:py-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Product Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 sm:w-72 md:w-[400px] lg:w-[500px] object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-2 items-center md:items-start text-center md:text-left mt-4 md:mt-0">
          {/* Back Button */}
          <Link
            to="/shop"
            className="text-sm sm:text-base mb-3 text-gray-400 hover:text-yellow-300 transition"
          >
            ← Back to Shop
          </Link>

          {/* Product Info */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold break-words">
            {product.name}
          </h1>
          <p className="text-base sm:text-lg text-gray-400">{product.color}</p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            £{product.price}
          </p>

          {/* Sizes */}
          {sizes.length > 0 && (
            <div className="flex gap-2 sm:gap-3 mt-3 justify-center md:justify-start flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  disabled={product.inventory[size] === 0}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 border border-white rounded text-sm sm:text-base transition ${
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
            onClick={handleAddToCart}
            className={`mt-5 w-36 sm:w-40 py-2 rounded-lg text-sm sm:text-base text-white transition ${
              selectedSize
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-700 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>

          {/* Inventory info */}
          {selectedSize && (
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              {product.inventory[selectedSize]} left in stock
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
