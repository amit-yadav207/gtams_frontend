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
    <div className="m-8 sm:m-2">
      <h1 className="text-3xl font-bold px-5 py-3  text-gray-800">
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
          className="mt-4 inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 transition duration-300"
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
                ? "bg-blue-500 text-white font-semibold "
                : "bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition duration-100"
            }`}
            onClick={() => handleTabChange("submitted")}
          >
            Submitted <span>(4)</span>
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "archived"
                ? "bg-blue-500 text-white font-semibold"
                : "bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition duration-100"
            }`}
            onClick={() => handleTabChange("archived")}
          >
            Archived <span>(5)</span>
          </button>
        </div>
        <hr className="my-1 border-gray-400" /> {/* Horizontal line */}
        {/* Render content based on activeTab */}
        {activeTab === "submitted" && (
          <div>
            {/* Content for Submitted tab */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2">
              <div className="m-4 p-4 border border-gray-200 rounded-lg text-gray-700  ">
                <h1 className="font-semibold text-xl">
                  Teaching Assisstent Requirement
                </h1>
                <h3>Course Id : CSPC 302</h3>
                <h3>Applied Date: March 29, 2024</h3>
                <h3>
                  Status:{" "}
                  <span className="bg-slate-100  rounded-lg text-sm px-2 py-0.5 text-gray-700 font-mono font-semibold">
                    pending
                  </span>
                </h3>
                <button className="mt-10  text-blue-600 font-semibold text-sm hover:bg-slate-100 px-3 py-2 rounded-md">
                  View application
                </button>
              </div>
              <div className="m-4 p-4 border border-gray-200 rounded-lg text-gray-700 ">
                <h1 className="font-semibold text-xl">
                  Teaching Assisstent Requirement
                </h1>
                <h3>Course Id : CSPC 302</h3>
                <h3>Applied Date: March 29, 2024</h3>
                <h3>
                  Status:{" "}
                  <span className="bg-slate-100  rounded-lg text-sm px-2 py-0.5 text-gray-700 font-mono font-semibold">
                    pending
                  </span>
                </h3>
                <button className="mt-10  text-blue-600 font-semibold text-sm hover:bg-slate-100 px-3 py-2 rounded-md">
                  View application
                </button>
              </div>
              <div className="m-4 p-4 border border-gray-200 rounded-lg text-gray-700 ">
                <h1 className="font-semibold text-xl">
                  Teaching Assisstent Requirement
                </h1>
                <h3>Course Id : CSPC 302</h3>
                <h3>Applied Date: March 29, 2024</h3>
                <h3>
                  Status:{" "}
                  <span className="bg-slate-100  rounded-lg text-sm px-2 py-0.5 text-gray-700 font-mono font-semibold">
                    pending
                  </span>
                </h3>
                <button className="mt-10  text-blue-600 font-semibold text-sm hover:bg-slate-100 px-3 py-2 rounded-md">
                  View application
                </button>
              </div>
              <div className="m-4 p-4 border border-gray-200 rounded-lg text-gray-700 ">
                <h1 className="font-semibold text-xl">
                  Teaching Assisstent Requirement
                </h1>
                <h3>Course Id : CSPC 302</h3>
                <h3>Applied Date: March 29, 2024</h3>
                <h3>
                  Status:{" "}
                  <span className="bg-slate-100  rounded-lg text-sm px-2 py-0.5 text-gray-700 font-mono font-semibold">
                    pending
                  </span>
                </h3>
                <button className="mt-10  text-blue-600 font-semibold text-sm hover:bg-slate-100 px-3 py-2 rounded-md">
                  View application
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === "archived" && (
          <div>
            {/* Content for Archived tab */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
              <div className="m-4 p-4 border border-gray-200 rounded-lg text-gray-700 ">
                <h1 className="font-semibold text-xl">
                  Teaching Assisstent Requirement
                </h1>
                <h3>Course Id : CSPC 302</h3>
                <h3>Applied Date: March 29, 2024</h3>
                <h3>
                  Status:{" "}
                  <span className="bg-slate-100  rounded-lg text-sm px-2 py-0.5 text-gray-700 font-mono font-semibold">
                    pending
                  </span>
                </h3>
                <button className="mt-10  text-blue-600 font-semibold text-sm hover:bg-slate-100 px-3 py-2 rounded-md">
                  View application
                </button>
              </div>
              <div className="m-4 p-4 border border-gray-200 rounded-lg text-gray-700 ">
                <h1 className="font-semibold text-xl">
                  Teaching Assisstent Requirement
                </h1>
                <h3>Course Id : CSPC 302</h3>
                <h3>Applied Date: March 29, 2024</h3>
                <h3>
                  Status:{" "}
                  <span className="bg-slate-100  rounded-lg text-sm px-2 py-0.5 text-gray-700 font-mono font-semibold">
                    pending
                  </span>
                </h3>
                <button className="mt-10  text-blue-600 font-semibold text-sm hover:bg-slate-100 px-3 py-2 rounded-md">
                  View application
                </button>
              </div>
              <div className="m-4 p-4 border border-gray-200 rounded-lg text-gray-700 ">
                <h1 className="font-semibold text-xl">
                  Teaching Assisstent Requirement
                </h1>
                <h3>Course Id : CSPC 302</h3>
                <h3>Applied Date: March 29, 2024</h3>
                <h3>
                  Status:{" "}
                  <span className="bg-slate-100  rounded-lg text-sm px-2 py-0.5 text-gray-700 font-mono font-semibold">
                    pending
                  </span>
                </h3>
                <button className="mt-10  text-blue-600 font-semibold text-sm hover:bg-slate-100 px-3 py-2 rounded-md">
                  View application
                </button>
              </div>
              <div className="m-4 p-4 border border-gray-200 rounded-lg text-gray-700 ">
                <h1 className="font-semibold text-xl">
                  Teaching Assisstent Requirement
                </h1>
                <h3>Course Id : CSPC 302</h3>
                <h3>Applied Date: March 29, 2024</h3>
                <h3>
                  Status:{" "}
                  <span className="bg-slate-100  rounded-lg text-sm px-2 py-0.5 text-gray-700 font-mono font-semibold">
                    pending
                  </span>
                </h3>
                <button className="mt-10  text-blue-600 font-semibold text-sm hover:bg-slate-100 px-3 py-2 rounded-md">
                  View application
                </button>
              </div>
              <div className="m-4 p-4 border border-gray-200 rounded-lg text-gray-700 ">
                <h1 className="font-semibold text-xl">
                  Teaching Assisstent Requirement
                </h1>
                <h3>Course Id : CSPC 302</h3>
                <h3>Applied Date: March 29, 2024</h3>
                <h3>
                  Status:{" "}
                  <span className="bg-slate-100  rounded-lg text-sm px-2 py-0.5 text-gray-700 font-mono font-semibold">
                    pending
                  </span>
                </h3>
                <button className="mt-10  text-blue-600 font-semibold text-sm hover:bg-slate-100 px-3 py-2 rounded-md">
                  View application
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ApplicationsPage;