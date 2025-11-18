import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  console.log(cartItems);
  // Subtotal including VAT (20%)
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center gap-10 p-4">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-center mt-25">
        Your Cart
      </h1>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6">
        {/* Items List */}
        <div className="flex-1 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-400">Your cart is empty 🛒</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="w-full bg-gray-900 rounded-lg flex flex-row justify-between items-center p-4 gap-4"
              >
                <div className="flex flex-row items-center gap-4 w-full sm:w-2/3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded"
                  />
                  <div className="flex flex-col items-start gap-1">
                    <h2 className="text-sm sm:text-base font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Size: {item.size} | Color: {item.color || "N/A"}
                    </p>
                    <p className="text-sm sm:text-base font-semibold">
                      £{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-4 mt-2 sm:mt-0">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        item.id,
                        item.size,
                        parseInt(e.target.value)
                      )
                    }
                    className="w-12 h-8 text-center rounded border border-gray-600 bg-gray-700 text-white text-sm"
                  />
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-red-500 hover:text-red-400 transition"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary Box (sticks to viewport height, scrollable) */}
        {cartItems.length > 0 && (
          <div className="w-full lg:w-96 bg-gray-800 rounded-lg p-6 flex flex-col gap-4 sticky top-4 self-start h-max">
            <h2 className="text-lg sm:text-xl font-semibold text-center lg:text-left">
              Order Summary
            </h2>
            <div className="flex justify-between text-sm sm:text-base">
              <span>Subtotal (incl. VAT)</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
