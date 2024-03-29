// Import necessary components and icons
import { NavLink } from "react-router-dom";
import { HiUser, HiCog, HiBell, HiOutlineBell, HiLogout } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./Navbar.css";
import GTAMS from "../assets/images/logo3.png";
import { useState } from "react"; // Importing useState hook from React
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/authSlice";

function Navbar() {
  // State for toggling navbar
  const [isOpen, setIsOpen] = useState(false);
  // Redux state for checking if the user is logged in
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Array of objects containing information for navigation links
  const navLinks = [
    { to: "/", text: "Home", role: "ALL" },
    { to: "/about", text: "About", role: "ALL" },
    { to: "/contact", text: "Contact", role: "ALL" },
    { to: "/job", text: "Jobs", role: "ALL" },
    // { to: "/profile", text: "Profile", role: "ALL" },
    { to: "/applications", text: "My Applications", role: "USER" },
    { to: "/dashboardAdmin", text: "Dashboard", role: "ADMIN" },
    { to: "/dashboardTACM", text: "Dashboard", role: "TACM" },
    { to: "/dashboardDS", text: "Dashboard", role: "DS" },
    { to: "/dashboardINS", text: "Dashboard", role: "INS" },
  ];

  // Function to handle login button click
  const handleLogin = () => {
    navigate("/login");
  };

  // Function to handle logout button click
  const handleLogout = async (event) => {
    event.preventDefault();
    const res = await dispatch(logout());

    // Redirect to home page if logout is successful
    if (res?.payload?.success) navigate("/");
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 bg-gray-800 text-white">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 text-white mr-3 lg:mr-10">
        <NavLink to="/">
          <img src={GTAMS} className="h-11" alt="Logo" />
        </NavLink>
      </div>

      {/* Hamburger menu for mobile */}
      <span>
        {isLoggedIn && (
          <div className="lg:hidden inline-block">
            {/* Replace the src with the actual path to the user's profile picture */}
            <img
              className="h-8 w-8 rounded-full hover:border-white-900"
              src="https://avatar.iran.liara.run/public/boy"
              alt="User"
            />
          </div>
        )}

        <div className="lg:hidden inline-block ml-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-3 rounded text-white-500 hover:text-white-900"
          >
            <svg
              className={`fill-current h-7 w-6  ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-7 w-6 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      </span>

      {/* Navigation links */}
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-sm lg:flex-grow navbar">
          {/* Iterate over the array of navLinks and create NavLink components */}
          {navLinks.map(
            (link, index) =>
              (link.role === "ALL" || link.role === role) && (
                <NavLink
                  key={index}
                  to={link.to}
                  className="block mt-3 lg:inline-block lg:mt-0 text-gray-300 mr-4 hover:bg-gray-700 hover:text-white p-2 rounded-md text-sm font-medium"
                >
                  {link.text}
                </NavLink>
              )
          )}

          {isLoggedIn && (
            <NavLink
              to="/profile"
              className="block mt-3 lg:inline-block lg:mt-0 text-gray-300 mr-4 hover:bg-gray-700 hover:text-white p-2 rounded-md text-sm font-medium"
            >
              Profile
            </NavLink>
          )}

          {/* Conditional rendering of login/logout button */}
          {isLoggedIn ? (
            <button
              className="block w-full mt-3 text-left lg:hidden lg:mt-0 text-gray-300 mr-4 hover:bg-gray-700 hover:text-white p-2 rounded-md text-sm font-medium"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="block w-full text-left mt-3 lg:hidden lg:mt-0 text-gray-300 mr-4 hover:bg-gray-700 hover:text-white p-2 rounded-md text-sm font-medium"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>

        {/* Profile picture icon for large screens */}
        {isLoggedIn ? (
          <div className="flex justify-between items-center space-x-4">
            <div className="hidden lg:inline-block">
              {/* Replace the src with the actual path to the user's profile picture */}
              <img
                className="h-8 w-8 rounded-full"
                src="https://avatar.iran.liara.run/public/boy"
                alt="User"
              />
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-3 rounded-md hidden lg:inline-block"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 rounded-md hidden lg:inline-block"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
