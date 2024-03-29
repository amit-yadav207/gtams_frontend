import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import jobs from "./jobsData";
const JobPage = () => {
  // Sample job data imported jobsDataimport jobsData from "./jobsData";

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter job listings based on search query
  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.courseID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.departments.some((dept) =>
        dept.toLowerCase().includes(searchQuery.toLowerCase())
      ) // Include department search
    );
  });

  //   Function to handle click on "See Details" button
  const handleSeeDetails = (jobId) => {
    // Code to show full details of the job with jobId
    console.log("See Details clicked for job with ID:", jobId);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Map through filtered job data and render cards */}
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-md rounded-md p-6 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="mb-2">
              <strong>Course ID:</strong> {job.courseID}
            </p>
            <p className="mb-2">
              <strong>Instructor:</strong> {job.instructor}
            </p>
            <p className="mb-2">
              <strong>Requirements:</strong>{" "}
              {job.requirements.length > 50
                ? `${job.requirements.slice(0, 50)}...`
                : job.requirements}
            </p>
            <p className="mb-2">
              <strong>Departments:</strong> {job.departments.join(", ")}
            </p>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => handleSeeDetails(job.id)}
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