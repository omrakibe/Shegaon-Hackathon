import React from "react";
import { Link, NavLink } from "react-router-dom";
import LocalImage from "./INNOVO.png";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth(); // ✅ Include logout function

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={LocalImage} className="mr-3 h-12" alt="Logo" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col lg:flex-row lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Authentication Section */}
          <div className="flex items-center lg:order-2">
            {user ? (
              <div className="flex items-center">
                <span className="mr-4 text-gray-700">
                  Welcome, {user.username || "Guest"}!
                </span>
                <button
                  onClick={logout}
                  className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-800 hover:bg-gray-50 px-4 py-2 rounded"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="text-white bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded"
                >
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
