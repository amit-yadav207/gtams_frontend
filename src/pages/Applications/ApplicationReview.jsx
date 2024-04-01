import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ApplicationReview = () => {
  const { jobId } = useParams();

  // Mock data for application list
  const applicationList = [
    {
      id: 1,
      applicant: "Alice",
      email: "alice@gmail.com",
      contact: "8378917401",
      applicationId: "APP123456",
      resumeLink: "https://example.com/alice_resume",
      recommended: true,
    },
    {
      id: 2,
      applicant: "Bob",
      email: "bob@gmail.com",
      contact: "8378901402",
      applicationId: "APP789012",
      resumeLink: "https://example.com/bob_resume",
      recommended: false,
    },
    {
      id: 3,
      applicant: "Eve",
      email: "eve@gmail.com",
      contact: "8378917403",
      applicationId: "APP345678",
      resumeLink: "https://example.com/eve_resume",
      recommended: true,
    },
    {
      id: 4,
      applicant: "Charlie",
      email: "charlie@gmail.com",
      contact: "8378917404",
      applicationId: "APP901234",
      resumeLink: "https://example.com/charlie_resume",
      recommended: false,
    },
    {
      id: 5,
      applicant: "David",
      email: "david@gmail.com",
      contact: "8378917405",
      applicationId: "APP567890",
      resumeLink: "https://example.com/david_resume",
      recommended: true,
    },
    {
      id: 3,
      applicant: "Eve",
      email: "eve@gmail.com",
      contact: "8378917403",
      applicationId: "APP345678",
      resumeLink: "https://example.com/eve_resume",
      recommended: true,
    },
    {
      id: 4,
      applicant: "Charlie",
      email: "charlie@gmail.com",
      contact: "8378917404",
      applicationId: "APP901234",
      resumeLink: "https://example.com/charlie_resume",
      recommended: false,
    },
    {
      id: 5,
      applicant: "David",
      email: "david@gmail.com",
      contact: "8378917405",
      applicationId: "APP567890",
      resumeLink: "https://example.com/david_resume",
      recommended: true,
    },
    {
      id: 3,
      applicant: "Eve",
      email: "eve@gmail.com",
      contact: "8378917403",
      applicationId: "APP345678",
      resumeLink: "https://example.com/eve_resume",
      recommended: true,
    },
    {
      id: 4,
      applicant: "Charlie",
      email: "charlie@gmail.com",
      contact: "8378917404",
      applicationId: "APP901234",
      resumeLink: "https://example.com/charlie_resume",
      recommended: false,
    },
    {
      id: 5,
      applicant: "David",
      email: "david@gmail.com",
      contact: "8378917405",
      applicationId: "APP567890",
      resumeLink: "https://example.com/david_resume",
      recommended: true,
    },
    {
      id: 3,
      applicant: "Eve",
      email: "eve@gmail.com",
      contact: "8378917403",
      applicationId: "APP345678",
      resumeLink: "https://example.com/eve_resume",
      recommended: true,
    },
    {
      id: 4,
      applicant: "Charlie",
      email: "charlie@gmail.com",
      contact: "8378917404",
      applicationId: "APP901234",
      resumeLink: "https://example.com/charlie_resume",
      recommended: false,
    },
    {
      id: 5,
      applicant: "David",
      email: "david@gmail.com",
      contact: "8378917405",
      applicationId: "APP567890",
      resumeLink: "https://example.com/david_resume",
      recommended: true,
    },
    {
      id: 3,
      applicant: "Eve",
      email: "eve@gmail.com",
      contact: "8378917403",
      applicationId: "APP345678",
      resumeLink: "https://example.com/eve_resume",
      recommended: true,
    },
    {
      id: 4,
      applicant: "Charlie",
      email: "charlie@gmail.com",
      contact: "8378917404",
      applicationId: "APP901234",
      resumeLink: "https://example.com/charlie_resume",
      recommended: false,
    },
    {
      id: 5,
      applicant: "David",
      email: "david@gmail.com",
      contact: "8378917405",
      applicationId: "APP567890",
      resumeLink: "https://example.com/david_resume",
      recommended: true,
    },
    {
      id: 3,
      applicant: "Eve",
      email: "eve@gmail.com",
      contact: "8378917403",
      applicationId: "APP345678",
      resumeLink: "https://example.com/eve_resume",
      recommended: true,
    },
    {
      id: 4,
      applicant: "Charlie",
      email: "charlie@gmail.com",
      contact: "8378917404",
      applicationId: "APP901234",
      resumeLink: "https://example.com/charlie_resume",
      recommended: false,
    },
    {
      id: 5,
      applicant: "David",
      email: "david@gmail.com",
      contact: "8378917405",
      applicationId: "APP567890",
      resumeLink: "https://example.com/david_resume",
      recommended: true,
    },
    {
      id: 3,
      applicant: "Eve",
      email: "eve@gmail.com",
      contact: "8378917403",
      applicationId: "APP345678",
      resumeLink: "https://example.com/eve_resume",
      recommended: true,
    },
    {
      id: 4,
      applicant: "Charlie",
      email: "charlie@gmail.com",
      contact: "8378917404",
      applicationId: "APP901234",
      resumeLink: "https://example.com/charlie_resume",
      recommended: false,
    },
    {
      id: 5,
      applicant: "David",
      email: "david@gmail.com",
      contact: "8378917405",
      applicationId: "APP567890",
      resumeLink: "https://example.com/david_resume",
      recommended: true,
    },
    {
      id: 3,
      applicant: "Eve",
      email: "eve@gmail.com",
      contact: "8378917403",
      applicationId: "APP345678",
      resumeLink: "https://example.com/eve_resume",
      recommended: true,
    },
    {
      id: 4,
      applicant: "Charlie",
      email: "charlie@gmail.com",
      contact: "8378917404",
      applicationId: "APP901234",
      resumeLink: "https://example.com/charlie_resume",
      recommended: false,
    },
    {
      id: 5,
      applicant: "David",
      email: "david@gmail.com",
      contact: "8378917405",
      applicationId: "APP567890",
      resumeLink: "https://example.com/david_resume",
      recommended: true,
    },
    {
      id: 10,
      applicant: "Kundan Kumar",
      email: "kundan@gmail.com",
      contact: "8378917405",
      applicationId: "APP567898",
      resumeLink: "https://example.com/david_resume",
      recommended: true,
    },
  ];

  // State to track selected applicant details
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  // Function to handle clicking on an application
  const handleApplicationClick = (applicant) => {
    setSelectedApplicant(applicant);
  };

  // Function to mark an applicant as recommended
  const handleMarkRecommended = (applicant) => {
    // Implement logic to mark applicant as recommended
    console.log(`Marking ${applicant.applicant} as recommended.`);
  };

  return (
    <div className="">
      <div className="p-2 items-center min-h-screen lg:m-2 m-1 border border-black">
        <div className="flex justify-between text-md font-semibold p-1">
          <h1>Applications For Job id: {jobId}</h1>
          <h1>Total Applications Received: {10}</h1>
        </div>
        <div className="m-1 border border-black flex space-x-2 min-h-screen justify-center">
          <section className="min-h-screen border border-green-500 w-2/3  ">
            <h2 className="m-2 my-2.5 font-semibold font-sans text-2xl text-center">
              Applicant Details
            </h2>
            {selectedApplicant ? (
              <div className="rounded-md shadow-md text-sm overflow-x-auto  w-auto min-h-auto overflow-y-auto mx-2 px-2   ">
                <table className="w-full border border-black ">
                  <thead>
                    <tr className="bg-gray-500 text-white">
                      <th className="p-2 ">Applicantion ID</th>
                      <th className="p-2">Name</th>
                      <th className="p-2">Email</th>
                      <th className="p-2">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="p-3 border border-black">
                        {selectedApplicant.applicationId}
                      </td>
                      <td className="p-3 border border-black">
                        {selectedApplicant.applicant}
                      </td>
                      <td className="p-3 border border-black">
                        {selectedApplicant.email}
                      </td>
                      <td className="p-3 border border-black">
                        {selectedApplicant.contact}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Add more details as needed */}
                <button
                  className=" hover:bg-slate-200 text-blue-500 font-bold p-2 rounded-md my-3"
                  onClick={() => handleMarkRecommended(selectedApplicant)}
                >
                  Mark as Recommended
                </button>
                <div className="flex flex-col justify-center">
                  <h2 className="font-semibold font-sans text-xl text-center">
                    Resume
                  </h2>
                  <div className="text-center min-h-screen border border-green-500 w-full">
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
          <section className="min-h-92   w-1/3 bg-white ">
            <h2 className="m-2 my-2.5 font-semibold font-sans text-2xl text-center">
              Application List
            </h2>
            <div className="overflow-x-auto mx-2 rounded-md  min-h-full max-h-full mb-5">
              <table className="w-full">
                <thead className="bg-gray-500 text-white sticky top-0">
                  <tr>
                    <th className="p-2">Sr. No.</th>
                    <th className="p-2">Applicant Name</th>
                    <th className="p-2">Application ID</th>
                  </tr>
                </thead>
              </table>
              <div className="rounded-md shadow-md text-sm overflow-y-auto max-h-96">
                <table className="w-full">
                  <tbody>
                    {applicationList.map((application, index) => (
                      <tr
                        key={application.id}
                        onClick={() => handleApplicationClick(application)}
                        className="cursor-pointer hover:bg-gray-200 hover:text-blue-700 hover:font-semibold text-center"
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReview;
