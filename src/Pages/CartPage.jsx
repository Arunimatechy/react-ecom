import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
 const navigate = useNavigate();
 const { Cart, addtoCart, removeFromCart} = useContext(CartContext);
 const total=Cart.reduce((a,b)=>a+b.price * b.quantity,0)
  return (
    <div className="mx-auto mt-10 cursor-pointer">
      {Cart.length === 0 ? (
        <div className="mt-20 text-center text-2xl font-semibold text-gray-600">
          🛒 All Cart Items Are Empty
        </div>
      ) : (
        <>
          <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 text-sm font-semibold">Image</th>
                <th className="p-3 text-sm font-semibold">Title</th>
                <th className="p-3 text-sm font-semibold">Quantity</th>
                <th className="p-3 text-sm font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {Cart.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100 border-b">
                  <td className="p-3 text-center flex justify-center">
                    <img
                      className="w-12 h-12 object-contain rounded"
                      src={item.image}
                      alt={item.title}
                    />
                  </td>

                  <td className="p-3 text-center bg-amber-100 font-medium">
                    {item.title}
                  </td>

                  <td className="p-3 text-center bg-gray-200 font-semibold flex justify-center items-center gap-2">
                    <button
                      className="px-2 border border-red-300 rounded"
                      onClick={() => removeFromCart(item)}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="px-2 border border-green-300 rounded"
                      onClick={() => addtoCart(item)}
                    >
                      +
                    </button>
                  </td>

                  <td className="p-3 text-center bg-blue-50 font-semibold">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
<div className="py-5 flex justify-center">
  <h1 className=" px-10 py-3 rounded-xl font-semibold hover:text-amber-50 text-3xl  hover:bg-amber-900
             border border-gray-700
             shadow-md hover:shadow-lg
             transition duration-300">
    Total Price = ₹{total}
  </h1>
</div>

<div className=" flex items-center justify-center">
<button
  onClick={() => navigate("/checkout")}
  className="px-10 py-3 rounded-xl font-semibold hover:bg-black hover:text-amber-50
             border border-gray-700
             shadow-md hover:shadow-lg
             transition duration-300"
>
  CHECKOUT →
</button>
</div>




        </>
      )}
    </div>
  );
};

export default CartPage;
