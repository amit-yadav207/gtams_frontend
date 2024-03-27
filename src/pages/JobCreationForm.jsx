import React, { useState, useNavig } from "react";
import jobs from "./jobsData";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import toast from "react-hot-toast";
const JobCreationForm = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [formData, setFormData] = useState({
    title: "",
    courseID: "",
    instructor: "",
    requirements: "",
    departments: [], // Change departments to an array
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "departments"
          ? value.split(",").map((dept) => dept.trim())
          : value, // Split the input value into an array of departments
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the form data to the existing jobs array
    const newJob = {
      id: jobs.length + 1, // Generate a new ID (assuming IDs are consecutive)
      ...formData,
    };
    jobs.push(newJob);
    // Log the updated jobs array
    toast.success("Job added!")
    console.log("Updated jobs array:", jobs);
    // Reset form data after submission
    setFormData({
      title: "",
      courseID: "",
      instructor: "",
      requirements: "",
      departments: [],
    });
    navigate('/dashboard')
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md m-3">
        <h1 className="text-2xl font-bold mb-4 text-center">Create New Job</h1>
        {/* Job creation form */}
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Course ID */}
          <div className="mb-4">
            <label
              htmlFor="courseID"
              className="block text-gray-700 font-semibold mb-2"
            >
              Course ID:
            </label>
            <input
              type="text"
              id="courseID"
              name="courseID"
              value={formData.courseID}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Instructor */}
          <div className="mb-4">
            <label
              htmlFor="instructor"
              className="block text-gray-700 font-semibold mb-2"
            >
              Instructor:
            </label>
            <input
              type="text"
              id="instructor"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Requirements */}
          <div className="mb-4">
            <label
              htmlFor="requirements"
              className="block text-gray-700 font-semibold mb-2"
            >
              Requirements:
            </label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Departments */}
          <div className="mb-4">
            <label
              htmlFor="departments"
              className="block text-gray-700 font-semibold mb-2"
            >
              Department:
            </label>
            <input
              type="text"
              id="departments"
              name="departments"
              value={formData.departments.join(", ")} // Convert array to comma-separated string
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobCreationForm;
