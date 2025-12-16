import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext.jsx";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password)
      return alert("Fill all fields");
    loginUser(form);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-8 w-full max-w-md shadow-2xl rounded-2xl gap-4 bg-white"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInput}
          className="border p-3 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInput}
          className="border p-3 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

