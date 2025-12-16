import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import { UserContext } from "../Context/UserContext.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { user } = useContext(UserContext);
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ 
    title: "", 
    price: "", 
    image: "", 
    description: "", 
    category: "", 
  });

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitProduct = (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.image || !form.description) return toast.error("Fill all fields");
    addProduct(form);
    toast.success("Product added!");
    setForm({ title:"", price:"", image:"", description:"", category:"" });
    navigate("/products");
  };

  if (!user?.isAdmin) return <p className="text-center mt-10 text-red-500">Only Admin can add products.</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={submitProduct} className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-3 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center">Add Product</h1>
        <input name="title" type="text" value={form.title} placeholder="Title" onChange={handleInput} className="border p-2 rounded"/>
        <input name="price" value={form.price} placeholder="Price" onChange={handleInput} className="border p-2 rounded"/>
        <input name="image" type="text" value={form.image} placeholder="Image URL" onChange={handleInput} className="border p-2 rounded"/>
        <select name="category" value={form.category} onChange={handleInput} className="border p-2 rounded">
            <option value="Breads">Breads</option>
            <option value="Muffins">Muffins</option>
            <option value="Rolls, Buns">Rolls, Buns</option>
            <option value=" Coffee "> Coffee </option>
        </select>
        <textarea name="description" value={form.description} placeholder="Description" onChange={handleInput} className="border p-2 rounded"/>
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
