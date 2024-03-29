import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../Helper/axiosInstance.js';

const JobDetailPage = () => {
  const navigate = useNavigate()
  const { jobId } = useParams();

  const [job, setJob] = useState();

  // Find the job with the matching jobId
  // const job = jobs.find((job) => job.id === parseInt(jobId));

  const getApplicationByJobId = async () => {
    const res = await axiosInstance.post(`/application//getApplicationById/${jobId}`);
    console.log(res.data);

    if (res.data.success) {
      setJob(res.data.application);
      toast.success(res.data.message)
    } else {
      console.log('error in fetching job');
      toast.error(res.data.message)
    }
  }

  useEffect(() => {
    getApplicationByJobId();
  }, [jobId])

  // If job not found, display a message
  if (!job) {
    return <div>Job not found</div>;
  }

  // Function to simulate applying for the job
  const handleApply = () => {
    // Code to handle applying for the job
    toast.success(`Applied for job:${job.title}`)
    console.log("Applying for job:", job.title);
    navigate('/job')

  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Job Details</h1>
      <div className="bg-white shadow-md rounded-md p-6 truncate text-ellipsis">
        <h2 className="text-xl font-semibold mb-2 ">{job.title}</h2>
        <p className="mb-2">
          <strong>Course ID:</strong> {job.courseId}
        </p>
        <p className="mb-2">
          <strong>Instructor:</strong> {job.instructor}
        </p>
        <p className="mb-2">
          <strong>Requirements:</strong> {job.requiredSkills}
        </p>
        <p className="mb-2">
          <strong>Departments:</strong> {job.department}
        </p>
        {/* <p className="text-sm text-gray-500 mb-2">
          <strong>Location:</strong> {job.location}
        </p> */}
        {/* Apply button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-4"
          onClick={handleApply}
        >
          Apply
        </button>
        {/* Back button */}
        <Link
          to="/job"
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </Link>
        {/* Attach PDFs */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Attached Documents</h3>
          <ul>
            <li>
              <a href="/path/to/pdf" target="_blank" rel="noopener noreferrer">
                Sample PDF
              </a>
            </li>
            {/* Add more PDFs as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
