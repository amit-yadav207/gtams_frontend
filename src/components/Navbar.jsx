// // Import necessary components and icons
// import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiUser, HiCog, HiBell, HiOutlineBell, HiLogout } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import './Navbar.css'
import GTAMS from '../assets/images/logo3.png'

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const hasNotifications = true; // Example: Set to true if there are notifications

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex-shrink-0 flex items-center">
//               <NavLink to="/" className="text-white text-xl font-bold">
//                 GTAMS
//               </NavLink>
//             </div>
//             <div className="hidden sm:block sm:ml-6">
//               <ul className="flex space-x-4 navbar">
//                 <li>
//                   <NavLink
//                     to="/"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/about"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     About
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/services"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Services
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/contact"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Contact
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/job"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Jobs
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="/dashboard"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                   Dashboard
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="flex items-center">
//             {/* Notification icon */}
//             <div className="mr-4 relative">
//               <button className="bg-gray-800 rounded-full flex items-center text-sm focus:outline-none text-white">
//                 {hasNotifications ? (
//                   <IoIosNotificationsOutline className="h-6 w-6" />
//                 ) : (
//                   <IoIosNotificationsOutline className="h-6 w-6" />
//                 )}
//                 {hasNotifications && (
//                   <span className="absolute top-0 right-0  px-1 py-.5 bg-red-600 rounded-full text-xs text-white">
//                     3
//                   </span>
//                 )}
//               </button>
//             </div>
//             {/* Profile picture */}
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none text-white"
//               >
//                 <span className="sr-only">User Photo</span>
//                 {/* Replace the src with the actual path to the user's profile picture */}
//                 <img
//                   className="h-8 w-8 rounded-full"
//                   src="https://avatar.iran.liara.run/public/boy"
//                   alt="User"
//                 />
//               </button>
//               {/* Dropdown menu */}
//               {isDropdownOpen && (
//                 <div className="z-50 absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   <div
//                     className="py-1 z-50"
//                     role="menu"
//                     aria-orientation="vertical"
//                     aria-labelledby="options-menu"
//                   >
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <HiUser className="mr-2" /> Profile
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <HiCog className="mr-2" /> Settings
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       <HiLogout className="mr-2" /> Logout
//                     </a>
//                   </div>
//                 </div>
//               )}

//             </div>
//             {/* Login and Signup buttons */}
//             <div className="ml-4">
//               <NavLink
//                 to="/login"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Login
//               </NavLink>
//               <NavLink
//                 to="/signup"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Sign Up
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;












import { useState } from "react"; // Importing useState hook from React

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling navbar



   
  return (
    <nav className="flex items-center justify-between flex-wrap p-4 bg-gray-800 text-white">
      {/* logo */}
      <div className="flex items-center flex-shrink-0 text-white mr-3 lg:mr-10">
        <NavLink to="/">
          <img src={GTAMS} className="h-11" alt="Logo" />
        </NavLink>
      </div>
      <span>
        <div className="lg:hidden inline-block ">

          {/* Replace the src with the actual path to the user's profile picture */}
          <img
            className="h-8 w-8 rounded-full hover:border-white-900"
            src="https://avatar.iran.liara.run/public/boy"
            alt="User"
          />
        </div>



        <div className=" lg:hidden inline-block ml-2">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-3 rounded text-white-500 hover:text-white-900 "
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
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
          }`}
      >

        <div className="text-sm lg:flex-grow navbar">

          <NavLink
            to="/"
            className="block mt-3 lg:inline-block lg:mt-0 text-gray-300 mr-4 hover:bg-gray-700 hover:text-white p-2 rounded-md text-sm font-medium"
          >
            Home
          </NavLink>


          <NavLink
            to="/about"
            className="block mt-3 lg:inline-block lg:mt-0 text-gray-300 mr-4 hover:bg-gray-700 hover:text-white p-2 rounded-md text-sm font-medium"
          >
            About
          </NavLink>


          <NavLink
            to="/services"
            className="block mt-3 lg:inline-block lg:mt-0 text-gray-300 mr-4 hover:bg-gray-700 hover:text-white p-2 rounded-md text-sm font-medium"
          >
            Services
          </NavLink>


          <NavLink
            to="/contact"
            className="block mt-3 lg:inline-block lg:mt-0 text-gray-300 mr-4 hover:bg-gray-700 hover:text-white p-2 rounded-md text-sm font-medium"
          >
            Contact
          </NavLink>


          <NavLink
            to="/job"
            className="block mt-3 lg:inline-block lg:mt-0 text-gray-300 mr-4 hover:bg-gray-700 hover:text-white p-2 rounded-md text-sm font-medium"
          >
            Jobs
          </NavLink>


          <NavLink
            to="/dashboard"
            className="block mt-3 lg:inline-block lg:mt-0 text-gray-300 mr-4 hover:bg-gray-700 hover:text-white p-2 rounded-md text-sm font-medium"
          >
            Dashboard
          </NavLink>


          {/* Profile picture icon for large screens */}

        </div>
        <div className="hidden lg:inline-block">
          <span className="sr-only">User Photo</span>
          {/* Replace the src with the actual path to the user's profile picture */}
          <img
            className="h-8 w-8 rounded-full"
            src="https://avatar.iran.liara.run/public/boy"
            alt="User"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;











// <img
//   className="h-8 w-8 rounded-full"
//   src="https://avatar.iran.liara.run/public/boy"
//   alt="User"
// />






// <ul className="flex space-x-4 navbar">
//   <li>
//     <NavLink
//       to="/"
//       className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     >
//       Home
//     </NavLink>
//   </li>
//   <li>
//     <NavLink
//       to="/about"
//       className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     >
//       About
//     </NavLink>
//   </li>
//   <li>
//     <NavLink
//       to="/services"
//       className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     >
//       Services
//     </NavLink>
//   </li>
//   <li>
//     <NavLink
//       to="/contact"
//       className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     >
//       Contact
//     </NavLink>
//   </li>
//   <li>
//     <NavLink
//       to="/job"
//       className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     >
//       Jobs
//     </NavLink>
//   </li>

//   <li>
//     <NavLink
//       to="/dashboard"
//       className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//     >
//     Dashboard
//     </NavLink>
//   </li>
// </ul>