import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext.jsx";

const Register = () => {
  const { registerUsers } = useContext(UserContext);
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) return alert("Fill all fields");
    registerUsers(form);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col p-8 w-full max-w-md shadow-2xl rounded-2xl gap-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <input type="text" name="username" placeholder="Username" onChange={handleInput} className="border p-3 rounded" />
        <input type="email" name="email" placeholder="Email" onChange={handleInput} className="border p-3 rounded" />
        <input type="password" name="password" placeholder="Password" onChange={handleInput} className="border p-3 rounded" />
        <button type="submit" className="bg-blue-600 text-white py-3 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
