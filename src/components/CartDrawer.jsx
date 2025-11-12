import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // import

const CartDrawer = ({ onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // use global state

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed top-0 right-0 w-80 md:w-96 h-full bg-black text-white shadow-lg z-[999] flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-yellow-300 transition"
        >
          ✕
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex items-center gap-3 bg-gray-900 rounded-lg p-3 relative"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-gray-400">Size: {item.size}</p>
                <p className="text-sm text-gray-400">
                  £{(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Quantity controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.size, item.quantity - 1)
                    }
                    className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.size, item.quantity + 1)
                    }
                    className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* X button */}
              <button
                onClick={() => removeFromCart(item.id, item.size)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center mt-10">
            Your cart is empty 🛒
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 p-4">
        <div className="flex justify-between text-sm mb-3">
          <span>Subtotal</span>
          <span>£{subtotal.toFixed(2)}</span>
        </div>
        <Link
          to="/cart"
          onClick={onClose}
          className="block w-full text-center bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          View Basket
        </Link>
      </div>
    </div>
  );
};

export default CartDrawer;
