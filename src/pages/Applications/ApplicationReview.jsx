import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import "./ApplicationReview.css";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const ApplicationReview = () => {
  const { jobId } = useParams();

  const [forms, setForms] = useState([]);

  const getAllForms = async () => {
    try {
      let res = axiosInstance.post(`form/getAllFormResponseByJobId/${jobId}`);

      await toast.promise(res, {
        loading: "Deleting...",
        success: (data) => {
          return data?.data?.message;
        },
        error: (data) => {
          return data?.response?.data.message;
        },
      });
      res = await res;

      console.log("received from data", res.data);
      setForms(res.data.forms.filter((form) => form.status === "Pending"));
    } catch (error) {
      console.error("Error Fetching from.", error);
      toast.error("Error Fetching from.");
    }
  };

  useEffect(() => {
    getAllForms();
  }, [setForms]);

  const [selectedApplicantIndex, setSelectedApplicantIndex] = useState(0);

  const handleNextClick = () => {
    setSelectedApplicantIndex((prevIndex) =>
      prevIndex === null || prevIndex === forms.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBackClick = () => {
    setSelectedApplicantIndex((prevIndex) =>
      prevIndex === null || prevIndex === 0 ? forms.length - 1 : prevIndex - 1
    );
  };

  const handleRecommendation = async () => {
    try {
      const updatedForms = [...forms];
      updatedForms[selectedApplicantIndex].status = "Forwarded";
      setForms(updatedForms);
      toast.success("Applicant recommended successfully!");
    } catch (error) {
      console.error("Error recommending applicant.", error);
      toast.error("Error recommending applicant.");
    }
  };

  const handleRejection = async () => {
    try {
      const updatedForms = [...forms];
      updatedForms[selectedApplicantIndex].status = "Rejected";
      setForms(updatedForms);
      toast.success("Applicant rejected successfully!");
    } catch (error) {
      console.error("Error rejecting applicant.", error);
      toast.error("Error rejecting applicant.");
    }
  };

  const selectedApplicant =
    selectedApplicantIndex !== null ? forms[selectedApplicantIndex] : null;

  return (
    <div className="p-2 items-center min-h-full md:m-2 shadow-md rounded-sm">
      <div className="flex justify-between font-semibold md:p-1 text-xs md:text-lg">
        <h1>
          Applications For Job id:{" "}
          <span className="bg-slate-200 px-2 rounded-md md:text-sm">
            {jobId}
          </span>
        </h1>
        <h1>
          Total Applications Received:{" "}
          <span className="bg-slate-200 px-2 rounded-md  md:text-sm">
            {forms.length}
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
            <div className="text-xs md:text-md overflow-x-auto overflow-y-auto mx-0.5 md:mx-2 px-1 md:px-2 min-h-screen scroll-smooth ">
              {/**below div will be hidden on small screens */}
              <div className="md:block hidden mt-2 rounded-md shadow-md overflow-auto ">
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
                        {selectedApplicant.formId}
                      </td>
                      <td className="p-0.5 md:p-2">
                        {selectedApplicant.applicantName}
                      </td>
                      <td className="p-0.5 md:p-2">
                        {selectedApplicant.email}
                      </td>
                      <td className="p-0.5 md:p-2">
                        {selectedApplicant.phone}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/**below div will be hidden on medium and laerge screens */}
              <div className="block md:hidden mt-2 rounded-md shadow-md overflow-auto md:max-h-56 min-h-28 max-h-56">
                <table className="w-full rounded">
                  <thead className="sticky top-0 bg-gray-500 text-white">
                    <tr>
                      <th className="p-0.5 md:p-3">Sr. No.</th>
                      <th className="p-0.5 md:p-3">Application ID</th>
                      <th className="p-0.5 md:p-3">Name</th>
                      <th className="p-0.5 md:p-3">Email</th>
                      <th className="p-0.5 md:p-3">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {forms.map((application, index) => (
                      <tr
                        key={application.id}
                        onClick={() => setSelectedApplicantIndex(index)}
                        className={`cursor-pointer hover:bg-gray-200 hover:text-blue-700  text-center ${
                          selectedApplicantIndex === index
                            ? "bg-gray-200 text-blue-700"
                            : ""
                        }`}
                      >
                        <td className="p-0.5 md:p-2">{index + 1}</td>
                        <td className="p-0.5 md:p-2">
                          {application.formId}
                        </td>
                        <td className="p-0.5 md:p-2">
                          {application.applicantName}
                        </td>
                        <td className="p-0.5 md:p-2">{application.email}</td>
                        <td className="p-0.5 md:p-2">{application.phone}</td>
                      </tr>
                    ))}
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
                <span className="">{`${selectedApplicantIndex + 1}/${
                  forms.length
                }`}</span>
                <button
                  onClick={handleNextClick}
                  className="bg-gray-200 text-gray-700 hover:text-white hover:bg-gray-500 font-semibold py-2 px-4 rounded-md"
                >
                  Next
                </button>
              </div>

              {/**resume section */}
              <div className="flex flex-col justify-center min-h-full mt-4">
                <h2 className="flex justify-between font-semibold font-sans text-xl text-center">
                  Resume
                  <button
                    className="text-right text-blue-500 text-sm hover:bg-slate-200 rounded-md px-2 hover:underline"
                    onClick={() =>
                      window.open(
                        selectedApplicant.resume.cloudinaryUrl,
                        "_blank"
                      )
                    }
                  >
                    View in New Tab
                    <span className="ml-0.5 inline-block">
                      <FiExternalLink />
                    </span>
                  </button>
                </h2>
                <div className="text-center min-h-full border w-full mb-2 rounded-md shadow-md">
                  <iframe
                    title="Resume"
                    src={selectedApplicant.resume.cloudinaryUrl}
                    className="w-full h-96 cursor-move"
                  ></iframe>
                </div>
              </div>
              {/* buttons for rejection and recommendation */}
              <div className="flex justify-between my-2 ">
                <button
                  className="font-semibold text-sm md:text-lg px-4 md:px-7 py-1 border  border-gray-500  rounded-md hover:bg-green-500 hover:text-white"
                  onClick={handleRecommendation}
                >
                  Recommend
                </button>

                <button
                  className="font-semibold text-sm md:text-lg px-4 md:px-7 py-1 border border-gray-500 rounded-md hover:bg-red-500 hover:text-white"
                  onClick={handleRejection}
                >
                  Reject
                </button>
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
              <div className="shadow-md  overflow-y-auto max-h-96 scroll-smooth scrollBar">
                <table className="w-full">
                  <tbody>
                    {forms.map((form, index) => (
                      <tr
                        key={form.formId}
                        onClick={() => setSelectedApplicantIndex(index)}
                        className={`cursor-pointer hover:bg-gray-200 hover:text-blue-700 font-semibold text-center ${
                          selectedApplicantIndex === index
                            ? "bg-gray-200 text-blue-700"
                            : ""
                        }`}
                      >
                        <td className="p-3 ">{index + 1}</td>
                        <td className="p-3 ">{form.applicantName}</td>
                        <td className="p-3">{form.formId}</td>
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
