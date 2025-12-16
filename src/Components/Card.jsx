



import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import { CartContext } from "../Context/CartContext.jsx";
import { UserContext } from "../Context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const [qty, setQty] = useState(0);
  const { deleteProduct, updateProduct } = useContext(ProductContext);
  const { addtoCart, removeFromCart, Cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ ...product });

  const navigate = useNavigate();

  useEffect(() => {
    const item = Cart.find((x) => x.id === product.id);
    setQty(item?.quantity || 0);
  }, [Cart]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    updateProduct(product.id, form);
    setIsEditing(false);
  };

  // Add to Cart with login check
  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to add to cart");
      navigate("/login");
      return;
    }
    addtoCart(product);
  };

  const handleRemoveFromCart = () => {
    if (!user) {
      alert("Please login to modify cart");
      navigate("/login");
      return;
    }
    removeFromCart(product);
  };

  return (
    <div className="shadow-lg rounded-xl p-4 bg-white w-80 cursor-pointer hover:shadow-2xl hover:scale-105 transform transition duration-300">
      {isEditing ? (
        <div className="flex flex-col gap-3">
          <input
            name="title"
            value={form.title}
            onChange={handleInput}
            placeholder="Product Title"
            className="border p-2 rounded"
          />
          <input
            name="price"
            value={form.price}
            onChange={handleInput}
            placeholder="Price"
            className="border p-2 rounded"
          />
          <input
            name="image"
            value={form.image}
            onChange={handleInput}
            placeholder="Image URL"
            className="border p-2 rounded"
          />
          <select
            name="category"
            value={form.category}
            onChange={handleInput}
            className="border p-2 rounded"
          >
            <option value="Breads">Breads</option>
            <option value="Muffins">Muffins</option>
            <option value="Rolls, Buns">Rolls, Buns</option>
            <option value="Coffee">Coffee</option>
          </select>
          <textarea
            name="description"
            value={form.description}
            onChange={handleInput}
            placeholder="Description"
            className="border p-2 rounded"
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleUpdate}
              className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition-colors"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded w-full hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {product.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-cover rounded-xl mb-3"
            />
          ) : (
            <div className="w-full h-52 bg-gray-200 rounded-xl mb-3 flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}

          <h2 className="text-xl font-bold text-center mb-1">{product.title}</h2>
          <p className="text-green-700 font-semibold text-center mb-1">₹ {product.price}</p>
          <p className="text-gray-600 text-center mb-2">{product.category}</p>
          <p className="text-gray-700 text-sm text-center mb-2">{product.description}</p>

          {user?.isAdmin ? (
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() =>
                  window.confirm("Delete this product?") && deleteProduct(product.id)
                }
                className="bg-red-600 text-white px-4 py-2 rounded w-full hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          ) : (
            
            qty > 0 ? (
              <div className="flex gap-3 justify-center items-center">
                <button
                  onClick={handleRemoveFromCart}
                  className="px-2 border border-red-300 rounded"
                >
                  -
                </button>
                {qty}
                <button
                  onClick={handleAddToCart}
                  className="px-2 border border-green-300 rounded"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="rounded-sm bg-amber-300 p-2 w-full"
              >
                Add to cart
              </button>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Card;
