import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaSearch, FaTrashAlt, FaPencilAlt, FaEye } from "react-icons/fa";
import axiosInstance from "../../Helper/axiosInstance";

const DashboardTACM = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const getAllJobs = async () => {
    try {
      const res = await axiosInstance.post("/application/getAllJobs");
      if (res.data?.success) {
        toast.success("Application Fetched.");
        setJobs(res.data.jobs);
      } else {
        toast.error("Error in fetch.");
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Error fetching jobs.");
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  const handleViewJob = (jobId) => {
    navigate(`/tacm-dashboard/application-review-by-committee/${jobId}`);

    // Handle view job functionality
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
    <div className="p-4  items-center min-h-screen lg:m-5 m-1 ">
      <h1 className="text-3xl sm:text-medium font-bold mb-2 ">Dashboard</h1>
      <div className="w-full flex justify-between items-center mb-4 border-green-500">
        <div className="w-full md:w-4/5 border-green-500 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by ID, Instructor, Title, Course ID, Department..."
            className="w-full sm:w-4/5 px-4 py-2 pl-10 rounded border border-gray-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <div className="border rounded-md hover:shadow-md text-sm overflow-x-auto mt-10">
        {filteredJobs.length > 0 ? (
          <table className="w-full table-auto ">
            <thead className="text-sm lg:text-lg">
              <tr className="bg-gray-200">
                <th className="px-4  lg:py-2">SN</th>
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
                  <td className="text-sm  border px-4 lg:py-2 truncate w-40 max-w-10">
                    {index + 1}
                  </td>
                  <td className=" text-sm  border px-4 py-2 truncate w-40 max-w-60">
                    {job.title}
                  </td>
                  <td className="text-sm  border px-4 py-2 truncate w-40 max-w-40">
                    {job.jobId}
                  </td>
                  <td className="text-sm  border px-4 py-2 truncate w-40 max-w-40">
                    {job.courseId}
                  </td>
                  <td className="text-sm border px-4 py-2 truncate w-40 max-w-40">
                    {job.department}
                  </td>
                  <td className="text-sm border px-4 py-2 truncate w-40 max-w-40">
                    {job.instructor}
                  </td>
                  <td className="text-sm border px-4 py-2 truncate w-40 max-w-80">
                    {job.requiredSkills}
                  </td>
                  <td className="text-sm border px-4 py-2 text-center w-40 max-w-20">
                    {job.isApplicationOpen ? "Yes" : "No"}
                  </td>
                  <td className="border px-2 text-sm  text-center py-2 w-40 max-w-48">
                    <div className="flex justify-evenly max-w-50 items-center">
                      <button
                        className="text-blue-600 m-1 p-1 rounded hover:underline hover:text-blue-600 font-semibold "
                        onClick={() => handleViewJob(job.jobId)}
                        title="View Applications"
                      >
                        See
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="font-semibold text-3xl">No jobs to show.</div>
        )}
      </div>
    </div>
  );
};

export default DashboardTACM;