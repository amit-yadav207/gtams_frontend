import React, { useState } from "react";
import jobs from "../JobPages/jobsData";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const JobCreationForm = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [formData, setFormData] = useState({
    title: "",
    courseId: "",
    instructor: "",
    requiredSkills: "",
    department: "",
    jobId: "",
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const createJob = async () => {
    const res = await axiosInstance.post('/application/create', formData);
    if (res.data?.success) {
      toast.success('Application created.')
    } else {
      toast.success('Error in fetch.')
    }
    console.log(res.data.data);
  }


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createJob();
    } catch (err) {
      console.error(err);
    }

    // const newJob = {
    //   id: jobs.length + 1, // Generate a new ID (assuming IDs are consecutive)
    //   ...formData,
    // };
    // jobs.push(newJob);
    // // Log the updated jobs array
    // toast.success("Job added!")
    // console.log("Updated jobs array:", jobs);
    // // Reset form data after submission
    setFormData({
      title: "",
      courseId: "",
      instructor: "",
      requiredSkills: "",
      department: "",
      jobId: "",
    });
    navigate('/dashboardDS')
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
              htmlFor="courseId"
              className="block text-gray-700 font-semibold mb-2"
            >
              Course ID:
            </label>
            <input
              type="text"
              id="courseId"
              name="courseId"
              value={formData.courseId}
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
          {/* requiredSkills */}
          <div className="mb-4">
            <label
              htmlFor="requiredSkills"
              className="block text-gray-700 font-semibold mb-2"
            >
              requiredSkills:
            </label>
            <textarea
              id="requiredSkills"
              name="requiredSkills"
              value={formData.requiredSkills}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Department */}
          <div className="mb-4">
            <label
              htmlFor="department"
              className="block text-gray-700 font-semibold mb-2"
            >
              Department:
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department} // Convert array to comma-separated string
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="jobId"
              className="block text-gray-700 font-semibold mb-2"
            >
              jobId:
            </label>
            <input
              type="text"
              id="jobId"
              name="jobId"
              value={formData.jobId} // Convert array to comma-separated string
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
