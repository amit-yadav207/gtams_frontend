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
        let res = axiosInstance.post(`/form/${jobId}`); // Fetch application details using jobId
        await toast.promise(res, {
          loading: "Loading...",
          success: (data) => {
            return data?.data?.message;
          },
          error: (data) => {
            return data?.data?.message;
          },
        });

        res = await res;
        console.log("data", res.data);

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
        <p className="text-lg font-semibold">Applicant Name:</p>
        <p className="text-gray-700">{application.applicantName}</p>

        <p className="text-lg font-semibold mt-4">Department:</p>
        <p className="text-gray-700">{application.department}</p>

        <p className="text-lg font-semibold mt-4">Course ID:</p>
        <p className="text-gray-700">{application.courseId}</p>

        <p className="text-lg font-semibold mt-4">Email:</p>
        <p className="text-gray-700">{application.email}</p>

        <p className="text-lg font-semibold mt-4">Previous Experience:</p>
        {application.previousExperience.map((exp, index) => (
          <div key={index} className="mt-2">
            <p className="text-gray-700">{exp.course}</p>
            <p className="text-gray-700">From: {exp.fromDate}</p>
            <p className="text-gray-700">To: {exp.toDate}</p>
          </div>
        ))}

        <p className="text-lg font-semibold mt-4">Resume:</p>
        <p className="text-gray-700">
          File Name: {application.resume.fileName}
        </p>
        <p className="text-gray-700">Size: {application.resume.size}</p>

        <p className="text-lg font-semibold mt-4">Status:</p>
        <p
          className={`text-lg ${
            application.status === "Pending" ? "font-bold" : ""
          }`}
        >
          {application.status}
        </p>

        <p className="text-lg font-semibold mt-4">Applied Date:</p>
        <p className="text-gray-700">{formatDate(application.appliedDate)}</p>
      </div>
    </div>
  );
};

export default ApplicationDetailsPage;
