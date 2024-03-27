import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Import toast from react-hot-toast
import { FaSearch } from 'react-icons/fa'; // Import the search icon from FontAwesome

import jobs from "../jobsData";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateJob = () => {
    console.log("Create Job button clicked");
    navigate("/dashboard/create-job");
  };

  const handleDeleteJob = (jobId) => {
    console.log("Delete job with ID:", jobId);
    // Instead of directly modifying jobs array, display a toast notification
    toast.success("Job deleted successfully");
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.id.toString().includes(searchQuery) ||
      job.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.courseID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.departments.some((department) =>
        department.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="p-4">
    
      <h1 className="text-3xl font-bold mb-4 ">Dashboard</h1>

      <div className="flex justify-between items-center mb-4 border-green-500">

      <div className="w-full md:w-4/5 border-green-500 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" /> {/* Add the search icon */}
        </div>
        <input
          type="text"
          placeholder="Search by ID, Instructor, Title, Course ID, Department..."
          className="w-full px-4 py-2 pl-10 rounded border border-gray-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
      </div>
      
        <div className="w-full md:w-1/5 text-right">
          <button
            className="bg-green-700 text-white px-4 py-2 rounded"
            onClick={handleCreateJob}
          >
            + Add Job
          </button>
        </div>
      </div>

      <div className="overflow-x-auto mb-4">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Course ID</th>
              <th className="px-4 py-2">Departments</th>
              <th className="px-4 py-2">Instructor</th>
              <th className="px-4 py-2">Requirements</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id}>
                <td className="border px-4 py-2">{job.id}</td>
                <td className="border px-4 py-2">{job.title}</td>
                <td className="border px-4 py-2">{job.courseID}</td>
                <td className="border px-4 py-2">
                  {job.departments.join(", ")}
                </td>
                <td className="border px-4 py-2">{job.instructor}</td>
                <td className="border px-4 py-2">{job.requirements}</td>
                <td className="border px-4 py-2 text-right">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2"
                    onClick={() => handleDeleteJob(job.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
