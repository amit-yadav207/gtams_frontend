import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi"; // Import icons from HeroIcons
const SetPassword = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleCancel = () => {
    // Go back to the previous page
    navigate(-1);
  };

  const handleSubmit = () => {
    // Handle submit logic here
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="flex justify-center container mx-auto items-center min-h-96 bg-slate-200">
      <div className="lg:m-10 lg:w-1/3 w-full lg:p-7 p-4 m-4 rounded-lg shadow-md bg-white">
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Set New Password
        </h1>
        <hr className="lg:mb-4 mb-3 border-t-1 border-gray-800 font-semibold"></hr>

        <p className="text-sm font-semibold">New Password</p>
        <div className="relative w-full focus:outline-none border border-gray-500 rounded-md px-2 py-2 mt-2">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter new password"
            autoFocus
            className="focus:outline-none  w-11/12"
          />
          <span
            className="absolute top-3 right-3 text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <HiEyeOff /> : <HiEye />}
          </span>
        </div>

        <p className="text-sm mt-4 font-semibold ">Confirm Password</p>
        <div className="relative w-full focus:outline-none border border-gray-500 rounded-md px-2 py-2 mt-2">
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            placeholder="Confirm password"
            className="focus:outline-none w-11/12"
          />

          <span
            className="absolute top-3 right-3 text-gray-500"
            onClick={toggleConfirmPasswordVisibility}
          >
            {confirmPasswordVisible ? <HiEyeOff /> : <HiEye />}
          </span>
        </div>

        <div className="flex justify-end mt-5">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold lg:py-1 lg:px-4 py-1 px-3 rounded mr-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold lg:py-1 lg:px-4 py-1 px-3 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
