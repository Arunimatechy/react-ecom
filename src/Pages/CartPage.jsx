
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { ThemeContext } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const { Cart, addtoCart, removeFromCart } = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);
  const total = Cart.reduce((a, b) => a + b.price * b.quantity, 0);

  return (
    <div className={`max-w-7xl mx-auto mt-6 px-4 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
      {Cart.length === 0 ? (
        <div className="mt-20 text-center text-lg font-semibold">
          🛒 Your cart is empty
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1">
            <table className={`w-full border ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"} shadow-sm`}>
              <thead>
                <tr className={`${darkMode ? "bg-gray-700 text-white" : "bg-cyan-950 text-amber-50"}`}>
                  <th className="p-3 text-left">Product</th>
                  <th className="p-3 text-center">Quantity</th>
                  <th className="p-3 text-right">Price</th>
                </tr>
              </thead>

              <tbody>
                {Cart.map(item => (
                  <tr
                    key={item.id}
                    className={`${darkMode ? "border-gray-700 hover:bg-gray-700" : "border-b border-gray-200 hover:bg-gray-50"}`}
                  >
                    <td className="p-4 flex items-center gap-4">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                      <span>{item.title}</span>
                    </td>

                    <td className="p-4 text-center">
                      <div className="inline-flex items-center border border-gray-300">
                        <button onClick={() => removeFromCart(item)} className="px-3 py-1 font-semibold hover:bg-gray-100">−</button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button onClick={() => addtoCart(item)} className="px-3 py-1 font-semibold hover:bg-gray-100">+</button>
                      </div>
                    </td>

                    <td className="p-4 text-right font-semibold">
                      ₹{item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

         
          <div className={`w-full md:w-96 p-4 rounded-lg shadow-md ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}>
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Items ({Cart.length})</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <hr className={`my-2 ${darkMode ? "border-gray-700" : "border-gray-200"}`} />
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className={`w-full py-3 rounded-lg font-semibold transition ${darkMode ? "bg-cyan-700 hover:bg-cyan-600 text-amber-50" : "bg-cyan-950 hover:bg-cyan-900 text-amber-50"}`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
