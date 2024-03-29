import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

// import jobs from "./jobsData";
const JobPage = () => {

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter job listings based on search query
  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.courseId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const getAllJobs = async () => {
    let res = axiosInstance.post("/application/getAllJobs");

    await toast.promise(res, {
      loading: "Loading...",
      success: (data) => {
        // console.log(data.data);
        return data?.data?.message;
      },
      error: (data) => {
        return data?.data?.message;
      },
    });

    res = await res;

    // console.log(res.data.jobs);
    setJobs(res.data.jobs);
  }

  useEffect(() => {
    getAllJobs();
  }, [])

  //   Function to handle click on "See Details" button
  const handleSeeDetails = (jobId) => {
    // Code to show full details of the job with jobId
    // console.log("See Details clicked for job with ID:", jobId);
    navigate("/job_details/" + jobId);
  };

  return (
    <div className="container mx-auto px-4 p-4">
      <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
      {/* Search bar with icon */}
      <div className="relative mb-4">
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by title, course, instructor, or department"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border border-gray-300 rounded px-4 py-2 pl-10 w-full" // Adjusted padding for the input
          autoFocus
        />
      </div>
      {/* Grid layout for job cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {/* Map through filtered job data and render cards */}
        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-md rounded-md p-6 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-2 ">{job.title}</h2>
            <p className="mb-2 overflow-hidden truncate text-ellipsis">
              <strong>Course ID:</strong> {job.courseId}
            </p>
            <p className="mb-2 overflow-hidden truncate text-ellipsis">
              <strong>Instructor:</strong> {job.instructor}
            </p>
            <p className="mb-2 overflow-hidden truncate text-ellipsis">
              <strong>Requirements:</strong>{" "}
              {job.requiredSkills.length > 50
                ? `${job.requiredSkills.slice(0, 50)}...`
                : job.requiredSkills}
            </p>
            <p className="mb-2 overflow-hidden truncate text-ellipsis" >
              <strong>Departments:</strong> {job.department}
            </p>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => handleSeeDetails(job.jobId)}
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPage;
