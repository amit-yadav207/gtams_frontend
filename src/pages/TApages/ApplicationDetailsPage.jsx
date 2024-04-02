// ApplicationDetailsPage.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

const ApplicationDetailsPage = () => {
  const { jobId } = useParams(); // Get jobId from route parameters
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const getApplicationDetails = async () => {
      try {
        const res = await axiosInstance.get(`/application/${jobId}`); // Fetch application details using jobId
        setApplication(res.data.application);
      } catch (error) {
        toast.error("Failed to fetch application details");
      }
    };

    getApplicationDetails();
  }, [jobId]);

  if (!application) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-8 sm:m-2">
      <h1 className="text-3xl font-bold px-5 py-3 text-gray-800">
        Application Details
      </h1>
      <div className="m-6 p-4 rounded-xl border-gray-300 shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800">
          {application.title}
        </h1>
        <p className="text-gray-700 mt-3 ">
          Job Id: {application.jobId}
        </p>
        <p className="text-gray-700">
          Applied on: {formatDate(application.appliedDate)}
        </p>
        <p className="text-gray-700">
          Status: {application.status}
        </p>
        {/* Display other application details as needed */}
      </div>
    </div>
  );
};

export default ApplicationDetailsPage;
