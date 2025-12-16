
import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-4xl font-extrabold text-white mb-8">Admin Dashboard</h1>
      <div className="flex flex-col gap-4">
        <Link to="/add" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">Add Product</Link>
        <Link to="/products" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">View Products</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;

