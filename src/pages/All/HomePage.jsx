import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto flex justify-center items-center px-4">
          <h1 className="text-xl font-bold">
            Graduate Teaching Assistant Management System
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="text-center">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Streamline TA Application and Assignment Processes
            </h2>
            <p className="text-gray-700">
              Welcome to the Graduate Teaching Assistant Management System. Our
              platform simplifies the process of managing TA applications,
              course assignments, and performance evaluations.
            </p>
            <Link
              to="/signup"
              className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>

            <Link
              to="/admin"
              className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Admin
            </Link>
            <Link
              to="/admin/create-course"
              className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Course Create
            </Link>
            <Link
            to="/admin/create-department"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Department Create
          </Link>
          <Link
            to="/instructor-dashboard"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            INS dashbaord
          </Link>
          </div>
        </section>

        <section className="mt-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Submit TA applications with ease</li>
              <li>Efficient course management and assignment</li>
              <li>Track TA performance and evaluations</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
