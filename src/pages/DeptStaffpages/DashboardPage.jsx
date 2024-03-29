import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Import toast from react-hot-toast
import { FaSearch } from "react-icons/fa"; // Import the search icon from FontAwesome

// import jobs from "../jobsData";
import axiosInstance from "../../Helper/axiosInstance";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const [jobs, setJobs] = useState([]);
  const getAllJobs = async () => {
    const res = await axiosInstance.post("/application/getAllJobs");
    if (res.data?.success) {
      toast.success("Application Fetched.");
    } else {
      toast.success("Error in fetch.");
    }
    console.log(res.data.jobs);
    setJobs(res.data.jobs);
  };
  useEffect(() => {
    getAllJobs();
  }, []);

  const handleCreateJob = () => {
    console.log("Create Job button clicked");
    navigate("/dashboard/create-job");
  };

  const handleDeleteJob = async (jobId) => {
    console.log("Delete job with ID:", jobId);

    const res = await axiosInstance.delete(`/application/delete/${jobId}`);
    if (res.data?.success) {
      toast.success("Application Deleted.");
      getAllJobs();
    } else {
      toast.success("Error in Delete.");
    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job._id.toString().includes(searchQuery) ||
      job.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.courseId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase())
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
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">SN</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Course ID</th>
              <th className="px-4 py-2">Departments</th>
              <th className="px-4 py-2">Instructor</th>
              <th className="px-4 py-2">Requirements</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, index) => (
              <tr key={job.id}>
                <td className="border px-4 py-2 ">{index + 1}</td>
                <td className="border px-4 py-2  break-words">{job.title}</td>
                <td className="border px-4 py-2 break-words">{job.courseId}</td>
                <td className="border px-4 py-2 break-words">
                  {job.department}
                </td>
                <td className="border px-4 py-2 break-words">
                  {job.instructor}
                </td>
                <td className="border px-4 py-2 break-words">
                  {job.requiredSkills}
                </td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <div className="flex flex-col">
                    <button
                      className="bg-red-500 text-white px-6 py-1 rounded hover:bg-red-600 mb-2"
                      onClick={() => handleDeleteJob(job._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-red-500 text-white px-7 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDeleteJob(job._id)}
                    >
                      View
                    </button>
                  </div>
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
