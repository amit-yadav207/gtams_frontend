import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

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
      let res = axiosInstance.put(
        `/application/update/${job._id}`,
        formData
      );

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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Job</h1>
      <form onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditJobPage;
