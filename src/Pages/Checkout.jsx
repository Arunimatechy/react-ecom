


import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { OrderContext } from "../Context/OrderContext";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { Cart, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const total = Cart.reduce((a, b) => a + b.price * b.quantity, 0);

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phonenumber: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrder = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.address ||
      !form.city ||
      !form.state ||
      !form.pincode ||
      !form.phonenumber ||
      !form.payment
    ) {
      alert("Please fill all fields");
      return;
    }

    if (!user) {
      alert("Please login to place an order");
      return;
    }

    if (Cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const order = {
      id: Date.now(),
      userId: user.id,
      username: user.username,
      items: Cart,
      total,
      payment: form.payment,
      ...form,
      date: new Date().toISOString(),
    };

    addOrder(order);
    clearCart();
    navigate("/success");
  };

  return (
    <form
      onSubmit={placeOrder}
      className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Delivery Address
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 w-full mb-4 rounded-md outline-none"
      />

      <textarea
        name="address"
        placeholder="Full Address"
        value={form.address}
        onChange={handleChange}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 w-full mb-4 rounded-md outline-none resize-none"
        rows="3"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-md outline-none"
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-md outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input
          type="number"
          name="phonenumber"
          placeholder="Phone Number"
          value={form.phonenumber}
          onChange={handleChange}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-md outline-none"
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-3 rounded-md outline-none"
        />
      </div>

      {/* Payment Options */}
      <div className="mt-6 border-t pt-4">
        <h3 className="font-semibold mb-3 text-gray-700">
          Payment Method
        </h3>

        <label className="flex items-center gap-2 mb-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="COD"
            checked={form.payment === "COD"}
            onChange={handleChange}
            className="accent-blue-600"
          />
          <span>Cash on Delivery</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={form.payment === "UPI"}
            onChange={handleChange}
            className="accent-blue-600"
          />
          <span>UPI / Online Payment</span>
        </label>
      </div>

      <div className="mt-6 flex justify-between items-center text-lg font-bold text-gray-800">
        <span>Total Amount</span>
        <span>₹{total}</span>
      </div>

      <button
        type="submit"
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded-lg font-semibold tracking-wide transition"
      >
        PLACE ORDER
      </button>
    </form>
  );
};

export default Checkout;
