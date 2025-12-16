
import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext.jsx";
import { ThemeContext } from "../Context/ThemeContext.jsx";
import { CartContext } from "../Context/CartContext.jsx";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { BiRegistered } from "react-icons/bi";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const { Themes, toggleTheme } = useContext(ThemeContext);
  const { cartlength } = useContext(CartContext);

  return (
    <nav
      className={`flex justify-between items-center px-3 md:px-6 py-3 md:py-4 shadow-md sticky top-0 z-50 ${
        Themes ? "bg-cyan-950 text-amber-50" : "bg-white text-gray-800"
      }`}
    >
     
      <div
        className={`font-serif text-xl md:text-2xl font-bold transition ${
          Themes
            ? "text-amber-50 hover:text-yellow-400"
            : "text-gray-800 hover:text-yellow-800"
        }`}
      >
        Coffee + Snacks
      </div>

     
      <div className="flex gap-4 md:gap-6 items-center font-semibold flex-wrap md:flex-nowrap">
      
        <Link
          to="/"
          className={`${Themes ? "text-amber-50" : "text-gray-700"} hover:text-[#8B4513] transition hidden md:block`}
        >
          Dashboard
        </Link>

        {user?.isAdmin && (
          <>
            <Link
              to="/admin"
              className={`${Themes ? "text-amber-50" : "text-gray-700"} hover:text-[#8B4513] transition hidden md:block`}
            >
              Admin
            </Link>
            <Link
              to="/admin/orders"
              className={`${Themes ? "text-amber-50" : "text-gray-700"} hover:text-[#8B4513] transition hidden md:block`}
            >
              All Orders
            </Link>
          </>
        )}

      
        {user && !user.isAdmin && (
          <Link
            to="/orders"
            className={`${Themes ? "text-amber-50" : "text-gray-700"} hover:text-[#8B4513] transition hidden md:block`}
          >
            My Orders
          </Link>
        )}

      
        {user ? (
          <>
            <div
              className={`hidden md:flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold ${
                Themes ? "bg-cyan-900 text-amber-50" : "bg-gray-100 text-gray-800"
              }`}
            >
              <span>☕ Welcome</span>
              <span
                className={`px-2 py-0.5 rounded-full font-bold ${
                  Themes
                    ? "bg-yellow-400 text-cyan-950"
                    : "bg-blue-600 text-white"
                }`}
              >
                {user.username}
              </span>
            </div>

          
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 py-2 rounded-lg font-semibold transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
       
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-2 rounded-lg font-semibold transition"
            >
              Login
            </Link>

        
            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-600 text-white px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 transition"
            >
              <BiRegistered /> <span className="hidden md:block">Register</span>
            </Link>
          </>
        )}

     
        <Link
          to="/cart"
          className="relative rounded-xl p-2 md:p-3 flex justify-center items-center"
        >
          <CiShoppingCart
            size={28}
            className={Themes ? "text-amber-50" : "text-gray-800"}
          />
          {cartlength > 0 && (
            <div className="animate-bounce w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center absolute -top-1 -right-1">
              {cartlength}
            </div>
          )}
        </Link>

       
        <button
          onClick={toggleTheme}
          className={`px-3 md:px-4 py-2 rounded-lg font-semibold border flex items-center gap-2 ${
            Themes
              ? "border-amber-50 text-amber-50 hover:bg-amber-50 hover:text-cyan-950"
              : "border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white"
          } transition`}
        >
          {Themes ? <BsSunFill /> : <BsMoonFill />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

