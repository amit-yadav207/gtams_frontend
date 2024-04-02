

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ApplicationReview.css";

const ApplicationReview = () => {
  const { jobId } = useParams();

  const applicationList = [
    {
      id: 1,
      applicant: "Alice Johnson",
      email: "alice.johnson@example.com",
      contact: "1234567890",
      applicationId: "APP123456",
      resumeLink: "https://example.com/alice_resume",
      recommended: true,
    },
    {
      id: 2,
      applicant: "Bob Smith",
      email: "bob.smith@example.com",
      contact: "2345678901",
      applicationId: "APP789012",
      resumeLink: "https://example.com/bob_resume",
      recommended: false,
    },
    {
      id: 3,
      applicant: "Eve Anderson",
      email: "eve.anderson@example.com",
      contact: "3456789012",
      applicationId: "APP345678",
      resumeLink: "https://example.com/eve_resume",
      recommended: true,
    },
    {
      id: 4,
      applicant: "Charlie Brown",
      email: "charlie.brown@example.com",
      contact: "4567890123",
      applicationId: "APP901234",
      resumeLink: "https://example.com/charlie_resume",
      recommended: false,
    },
    {
      id: 5,
      applicant: "David Miller",
      email: "david.miller@example.com",
      contact: "5678901234",
      applicationId: "APP567890",
      resumeLink: "https://example.com/david_resume",
      recommended: true,
    },
    {
      id: 6,
      applicant: "Emily Clark",
      email: "emily.clark@example.com",
      contact: "6789012345",
      applicationId: "APP678901",
      resumeLink: "https://example.com/emily_resume",
      recommended: false,
    },
    {
      id: 7,
      applicant: "Frank Thomas",
      email: "frank.thomas@example.com",
      contact: "7890123456",
      applicationId: "APP789012",
      resumeLink: "https://example.com/frank_resume",
      recommended: true,
    },
    {
      id: 8,
      applicant: "Grace Davis",
      email: "grace.davis@example.com",
      contact: "8901234567",
      applicationId: "APP890123",
      resumeLink: "https://example.com/grace_resume",
      recommended: false,
    },
    {
      id: 9,
      applicant: "Henry Wilson",
      email: "henry.wilson@example.com",
      contact: "9012345678",
      applicationId: "APP901234",
      resumeLink: "https://example.com/henry_resume",
      recommended: true,
    },
    {
      id: 10,
      applicant: "Isabella Garcia",
      email: "isabella.garcia@example.com",
      contact: "0123456789",
      applicationId: "APP012345",
      resumeLink: "https://example.com/isabella_resume",
      recommended: false,
    },
    {
      id: 11,
      applicant: "Jack Brown",
      email: "jack.brown@example.com",
      contact: "1234567890",
      applicationId: "APP123456",
      resumeLink: "https://example.com/jack_resume",
      recommended: true,
    },
    {
      id: 12,
      applicant: "Kelly White",
      email: "kelly.white@example.com",
      contact: "2345678901",
      applicationId: "APP234567",
      resumeLink: "https://example.com/kelly_resume",
      recommended: false,
    },
    // Add more entries as needed...
  ];

  const [selectedApplicantIndex, setSelectedApplicantIndex] = useState(null);

  const handleNextClick = () => {
    setSelectedApplicantIndex((prevIndex) =>
      prevIndex === null || prevIndex === applicationList.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handleBackClick = () => {
    setSelectedApplicantIndex((prevIndex) =>
      prevIndex === null || prevIndex === 0
        ? applicationList.length - 1
        : prevIndex - 1
    );
  };

  const selectedApplicant =
    selectedApplicantIndex !== null
      ? applicationList[selectedApplicantIndex]
      : null;

  return (
    <div className="p-2 items-center min-h-full md:m-2 shadow-md rounded-sm">
      <div className="flex justify-between font-semibold md:p-1 text-xs md:text-lg">
        <h1>
          Applications For Job id:{" "}
          <span className="bg-slate-200 px-2 rounded-md md:text-sm">{jobId}</span>
        </h1>
        <h1>
          Total Applications Received:{" "}
          <span className="bg-slate-200 px-2 rounded-md  md:text-sm">
            {applicationList.length}
          </span>
        </h1>
      </div>
      <div className="m-1 flex flex-col md:flex-row space-y-2 md:space-y-0 justify-center border rounded-md">
        {/* Section 1: Applicant Details */}
        <section className="w-full md:w-3/5">
          <h2 className="mt-2 font-semibold font-sans text-lg md:text-2xl text-center">
            Applicant Details
          </h2>
          {selectedApplicant ? (
            <div className="text-xs md:text-md overflow-x-auto overflow-y-auto mx-0.5 md:mx-2 px-1 md:px-2 min-h-screen scroll-smooth">
              <div className="mt-2 rounded-md shadow-md overflow-auto">
                <table className="w-full rounded">
                  <thead>
                    <tr className="bg-gray-500 text-white">
                      <th className="p-0.5 md:p-2">Application ID</th>
                      <th className="p-0.5 md:p-2">Name</th>
                      <th className="p-0.5 md:p-2">Email</th>
                      <th className="p-0.5 md:p-2">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="p-0.5 md:p-2">
                        {selectedApplicant.applicationId}
                      </td>
                      <td className="p-0.5 md:p-2">
                        {selectedApplicant.applicant}
                      </td>
                      <td className="p-0.5 md:p-2">
                        {selectedApplicant.email}
                      </td>
                      <td className="p-0.5 md:p-2">
                        {selectedApplicant.contact}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>





              
              {/**back and next button on small screens */}
              <div className=" md:hidden flex justify-between  items-center my-4">
                <button
                  onClick={handleBackClick}
                  className="bg-gray-200 text-gray-700 hover:text-white hover:bg-gray-500 font-semibold py-2 px-4 rounded-md"
                >
                  Back
                </button>
                <span className="hidden sm:inline">{`${
                  selectedApplicantIndex + 1
                }/${applicationList.length}`}</span>
                <button
                  onClick={handleNextClick}
                  className="bg-gray-200 text-gray-700 hover:text-white hover:bg-gray-500 font-semibold py-2 px-4 rounded-md"
                >
                  Next
                </button>
              </div>
              {/**button for mark as recommendation */}
              <button
                className="hover:bg-slate-200 text-blue-500 font-bold p-2 rounded-md my-2"
                onClick={() => handleMarkRecommended(selectedApplicant)}
              >
                Mark as Recommended
              </button>

              {/**resume section */}
              <div className="flex flex-col justify-center min-h-full">
                <h2 className="font-semibold font-sans text-xl text-center">
                  Resume
                </h2>
                <div className="text-center min-h-screen border w-full mb-2 rounded-md shadow-md">
                  Container for Resume
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-center text-3xl font-semibold my-5">
              No Application selected Yet!
            </h1>
          )}
        </section>

        {/* Section 2: Application List */}
        <section className="w-full md:w-2/5 bg-white md:block hidden">
          <div className="sticky top-2">
            <h2 className="m-2 font-semibold font-sans text-center text-lg md:text-2xl">
              Application List
            </h2>
            <div className="overflow-x-auto mx-1 rounded-md shadow-md min-h-full max-h-full mb-5 text-xs md:text-md">
              <table className="w-full">
                <thead className="bg-gray-500 text-white sticky top-0">
                  <tr>
                    <th className="p-2">Sr. No.</th>
                    <th className="p-2">Applicant Name</th>
                    <th className="p-2">Application ID</th>
                  </tr>
                </thead>
              </table>
              <div className="shadow-md text-xs md:text-sm overflow-y-auto max-h-96 scroll-smooth scrollBar">
                <table className="w-full">
                  <tbody>
                    {applicationList.map((application, index) => (
                      <tr
                        key={application.id}
                        onClick={() => setSelectedApplicantIndex(index)}
                        className={`cursor-pointer hover:bg-gray-200 hover:text-blue-700 font-semibold text-center ${
                          selectedApplicantIndex === index
                            ? "bg-gray-200 text-blue-700"
                            : ""
                        }`}
                      >
                        <td className="p-3">{index + 1}</td>
                        <td className="p-3">{application.applicant}</td>
                        <td className="p-3">{application.applicationId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ApplicationReview;
