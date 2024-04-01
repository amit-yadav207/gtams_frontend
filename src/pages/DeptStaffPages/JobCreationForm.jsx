import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";
import Dropdown from "./Dropdown";

const JobCreationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    courseId: "",
    instructor: "",
    requiredSkills: "",
    department: "",
    jobId: "",
    isApplicationOpen: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const [courseOptions, setCourseOptions] = useState([
    { value: "", label: "Select Course ID" },
    { value: "CS101", label: "CS101" },
    { value: "ENG201", label: "ENG201" },
    { value: "MATH301", label: "MATH301" },
    { value: "PHY101", label: "PHY101" },
    { value: "CH201", label: "CH201" },
    { value: "CE301", label: "CE01" },
  ]);

  const [instructorOptions, setInstructorOptions] = useState([
    { value: "", label: "Select Instructor" },
    { value: "John Doe", label: "John Doe" },
    { value: "Jane Smith", label: "Jane Smith" },
    { value: "Alex Johnson", label: "Alex Johnson" },
  ]);

  const [departmentOptions, setDepartmentOptions] = useState([
    { value: "", label: "Select Department" },
    { value: "CS", label: "Computer Science" },
    { value: "ENG", label: "English" },
    { value: "MATH", label: "Mathematics" },
    { value: "PHYSICS", label: "Physics" },
    { value: "CHEM", label: "Chemistry" },
    { value: "CIVIL", label: "Civil" },
  ]);

  const updateJob = async () => {
    try {
      const res = await axiosInstance.put(`/application/update/${jobId}`, formData);
  
      await toast.promise(res, {
        loading: "Updating...",
        success: (data) => {
          return data?.data?.message;
        },
        error: (data) => {
          return data?.response?.data.message;
        },
      });
  
      // Handle success or error as needed
    } catch (error) {
      console.error(error);
      // Handle error as needed
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
        isApplicationOpen: true,
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
            <Dropdown
              options={courseOptions}
              value={formData.courseId}
              handleChange={handleChange}
              name="courseId"
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
            <Dropdown
              options={instructorOptions}
              value={formData.instructor}
              handleChange={handleChange}
              name="instructor"
            />
          </div>

          {/* Required Skills */}
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
