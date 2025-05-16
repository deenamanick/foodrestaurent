import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, setUser } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate(); // 👈 added navigate

  const handleLogout = () => {
    setUser(null);
    setShowDropdown(false);
    navigate("/login"); // 👈 redirect to login page after logout
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🍽️ RestoShop</h1>

      <div className="space-x-4 flex items-center relative">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>

        {user ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="font-semibold hover:text-gray-300 focus:outline-none"
            >
              Hi, {user.name} ⬇️
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-32 z-50">
                <Link
                  to="/orderhistory"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  My Orders
                </Link>

                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-left w-full hover:bg-red-100 text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
