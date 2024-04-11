import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

import Dropdown from "./Dropdown";

const EditJobPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    courseId: "",
    instructor: "",
    requiredSkills: "",
    department: "",
    jobId: "",
    isApplicationOpen: true,
  });

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

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axiosInstance.post(
          `/application/getApplicationById/${jobId}`
        );
        if (res.data?.success) {
          const fetchedJob = res.data.application;
          setJob(fetchedJob);
          setFormData({
            title: fetchedJob.title,
            courseId: fetchedJob.courseId,
            instructor: fetchedJob.instructor,
            requiredSkills: fetchedJob.requiredSkills,
            department: fetchedJob.department,
            jobId: fetchedJob.jobId,
            isApplicationOpen: fetchedJob.isApplicationOpen,
          });
        } else {
          console.error("Error fetching job:", res.data?.message);
        }
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    fetchJob();
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const updateJob = async () => {
    try {
      let res = axiosInstance.put(`/application/update/${job._id}`, formData);

      await toast.promise(res, {
        loading: "Updating...",
        success: (data) => {
          return data?.data?.message;
        },
        error: (data) => {
          return data?.response?.data.message;
        },
      });
      res = await res;
      // Handle success or error as needed
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateJob();
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

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 lg:m-4 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Edit Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
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
            className="w-full"
          />
        </div>
        <div>
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="department"
            className="block text-gray-700 font-semibold mb-2"
          >
            Department:
          </label>
          <Dropdown
            options={departmentOptions}
            value={formData.department}
            handleChange={handleChange}
            name="department"
            className="w-full"
          />
        </div>
        <div>
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isApplicationOpen"
            checked={formData.isApplicationOpen}
            onChange={handleChange}
            className="mr-3 h-4 w-4 text-blue-600 rounded"
          />
          <label className="text-gray-700 font-semibold">Is Application Open</label>
        </div>
        <div className="flex justify-between">
        <button
            type="button"
            className="bg-gray-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
            onClick={()=>{navigate(-1)}}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJobPage;