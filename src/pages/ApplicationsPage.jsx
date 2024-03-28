import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ApplicationsPage = () => {
  const userData = useSelector((state) => state?.auth?.data);
  const [activeTab, setActiveTab] = useState("submitted");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  console.log(userData);
  return (
    <div className="m-8 border border-black">
      <h1 className="text-3xl font-bold   text-gray-800">
        Hello, {userData.fullName.toUpperCase()}!{" "}
      </h1>
      <section className="m-6 p-4 pb-20 rounded-xl border-gray-300 shadow-md">
        <h1 className="text-2xl font-semibold font-sans text-gray-800">
          Help Us Get to Know You
        </h1>

        <p className="text-gray-700 mt-3 ">
          Your profile not only helps you apply to jobs quickly but also helps
          our team know what type of jobs you are looking for.
        </p>
        <NavLink
          to="/profile"
          className="mt-4 inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition duration-300"
        >
          View Your Profile
        </NavLink>
      </section>
      <section className="m-6 p-4 pb-20 rounded-xl border-gray-300 shadow-md">
        <h1 className="mt-2 text-2xl font-semibold text-gray-800">
          Applications
        </h1>
        <div className="flex mt-4">
          <button
            className={`mr-2 px-4 py-2  ${
              activeTab === "submitted"
                ? "bg-blue-500 text-white font-semibold"
                : "bg-gray-200 text-gray-700 font-semibold"
            }`}
            onClick={() => handleTabChange("submitted")}
          >
            Submitted <span>(2)</span>
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "archived"
                ? "bg-blue-500 text-white font-semibold"
                : "bg-gray-200 text-gray-700 font-semibold"
            }`}
            onClick={() => handleTabChange("archived")}
          >
            Archived <span>(2)</span>
          </button>
        </div>
        <hr className="my-1 border-gray-400" /> {/* Horizontal line */}
        {/* Render content based on activeTab */}
        {activeTab === "submitted" && (
          <div>
            {/* Content for Submitted tab */}
            <h2>Submitted Applications</h2>
          </div>
        )}
        {activeTab === "archived" && (
          <div>
            {/* Content for Archived tab */}
            <h2>Archived Applications</h2>
          </div>
        )}
      </section>
    </div>
  );
};

export default ApplicationsPage;
