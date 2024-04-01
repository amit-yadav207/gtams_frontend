import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const JobCreationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    courseId: "",
    instructor: "",
    requiredSkills: "",
    department: "",
    jobId: "",
    isApplicationOpen: true, // Default value for isApplicationOpen
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
    console.log(formData);
  };

  const createJob = async () => {
    try {
      let res = axiosInstance.post("/application/create", formData);

      await toast.promise(res, {
        loading: "Creating...",
        success: (data) => {
          // console.log(data.data);
          return data?.data?.message;
        },
        error: (data) => {
          // console.log('data', data?.response?.data.message)
          return data?.response?.data.message;
        },
      });

      res = await res;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob();
      setFormData({
        title: "",
        courseId: "",
        instructor: "",
        requiredSkills: "",
        department: "",
        jobId: "",
        isApplicationOpen: true, // Reset isApplicationOpen after submission
      });
      navigate("/dashboardDS");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md m-3">
        <h1 className="text-2xl font-bold mb-4 text-center">Create New Job</h1>
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

          {/* Job id */}
          <div className="mb-4">
            <label
              htmlFor="jobId"
              className="block text-gray-700 font-semibold mb-2"
            >
              Job ID:
            </label>
            <input
              type="text"
              id="jobId"
              name="jobId"
              value={formData.jobId}
              onChange={handleChange}
              required
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
              value={formData.department}
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
              Required Skills:
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

          {/* is application is accepting response */}
          <div className="mb-4">
            <label className=" text-gray-700 font-semibold mb-2 flex justify-start items-center">
              <input
                type="checkbox"
                name="isApplicationOpen"
                checked={formData.isApplicationOpen}
                onChange={handleChange}
                className="mr-3 h-4 w-5"
              />
              <span>Is Application Open</span>
            </label>
          </div>

          {/* submit */}
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
