import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Import toast from react-hot-toast
import { FaSearch } from "react-icons/fa"; // Import the search icon from FontAwesome
import { FaTrashAlt, FaPencilAlt, FaEye } from "react-icons/fa";
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

    let res = axiosInstance.delete(`/application/delete/${jobId}`);


    await toast.promise(res, {
      loading: "Deleting...",
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

    if (res.data?.success) {
      getAllJobs();
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
    <div className="p-4 flex flex-col items-center min-h-screen">
      <h1 className="text-3xl ms:text-md font-bold mb-2 ">Dashboard</h1>

      <div className=" mb-4 m-10 text-sm flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center mb-4 border-green-500">
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
        <table className="w-full table-auto">
          <thead className="text-sm lg:text-lg">
            <tr className="bg-gray-200">
              <th className="px-4 py-2">SN</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Job ID</th>
              <th className="px-4 py-2">Course ID</th>
              <th className="px-4 py-2">Departments</th>
              <th className="px-4 py-2">Instructor</th>
              <th className="px-4 py-2">Requirements</th>
              <th className="px-4 py-2">Open</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, index) => (
              <tr key={job._id}>
                <td className="border px-4 py-2 ">{index + 1}</td>
                <td className="border px-4 py-2  truncate w-40 max-w-60">
                  {job.title}
                </td>
                <td className="border px-4 py-2 truncate w-40 max-w-40">
                  {job.jobId}
                </td>
                <td className="border px-4 py-2 truncate w-40 max-w-40">
                  {job.courseId}
                </td>
                <td className="border px-4 py-2 truncate w-40 max-w-40">
                  {job.department}
                </td>
                <td className="border px-4 py-2 truncate w-40 max-w-40">
                  {job.instructor}
                </td>
                <td className="border px-4 py-2 truncate w-40 max-w-80">
                  {job.requiredSkills}
                </td>
                <td className="border px-4 py-2 text-center">
                  {job.isApplicationOpen ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2 ">
                  <div className="flex justify-evenly max-w-32">
                    <button
                      className="bg-red-500 text-white m-2 p-2 rounded hover:bg-red-600 mb-2 flex items-center justify-center"
                      onClick={() => handleDeleteJob(job._id)}
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      className="bg-yellow-400 text-white m-2 p-2 rounded hover:bg-yellow-500 flex items-center justify-center"
                      onClick={() => handleEditJob(job._id)}
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      className="bg-blue-500 text-white m-2 p-2 rounded hover:bg-blue-600 flex items-center justify-center"
                      onClick={() => handleViewJob(job._id)}
                    >
                      <FaEye />
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
