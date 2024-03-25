import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "react-router-dom";
import { HiUser, HiCog, HiLogout } from 'react-icons/hi';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="text-white text-xl font-bold">GTAMS</NavLink>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Navigation links */}
                <NavLink exact to="/" activeClassName="text-white" className="text-white-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                <NavLink to="/about" activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</NavLink>
                <NavLink to="/services" activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</NavLink>
                <NavLink to="/contact" activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {/* Profile picture */}
            <div className="ml-3 relative">
              <button
                onClick={toggleDropdown}
                className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none text-white"
              >
                <span className="sr-only">User Photo</span>
                {/* Replace the src with the actual path to the user's profile picture */}
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="User"
                />
              </button>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <HiUser className="mr-2" /> Profile
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <HiCog className="mr-2" /> Settings
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <HiLogout className="mr-2" /> Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
