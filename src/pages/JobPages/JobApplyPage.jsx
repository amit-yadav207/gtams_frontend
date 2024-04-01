import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";

// import { FaGraduationCap } from "react-icons/fa";
import { RiBriefcaseLine } from "react-icons/ri";
// import { IoMdConstruct } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getUserData } from "../../Redux/authSlice";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function JobApplyPage() {
  const [user, setUser] = useState({});
  const [isFirstJob, setIsFirstJob] = useState("No");
  const [course, setCourse] = useState("");

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [jobDetails, setJobDetails] = useState([]);
  const navigate = useNavigate();
  const { jobId } = useParams();
  const dispatch = useDispatch();

  const fullName = user.fullName;

  const getUser = async () => {
    let res = dispatch(getUserData());

    await toast.promise(res, {
      loading: "Fetching profile...",
      success: (data) => {
        // console.log('data hai',data.payload);
        return data?.payload?.message;
      },
      error: (data) => {
        // console.log('data', data?.response?.data.message)
        return data?.response?.data.message;
      },
    });

    res = await res;
    // console.log('data 2 hai', res.payload.user);
    setUser(res.payload.user);
  };

  useEffect(() => {
    getUser();
  }, [setUser]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (event) => {
    setIsFirstJob(event.target.value);
  };


  const handleAddDetails = () => {
    // Check if any of the fields are empty
    if (!course || !fromDate || !toDate) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Check if toDate is after fromDate
    if (toDate < fromDate) {
      toast.error("End date cannot be before start date.");
      return;
    }

    // If all validations pass, add the details
    const newDetail = {
      course: course,
      fromDate: fromDate,
      toDate: toDate,
    };

    setJobDetails([...jobDetails, newDetail]);

    console.log("New Detail:", newDetail);

    // Optionally, you can clear the input fields after adding the detail
    setCourse("");
    setFromDate("");
    setToDate("");
  };

  return (
    <div
      className="items-center sm:p-1 h-full  lg:min-h-screen "
      style={{ minHeight: "85vh" }}
    >
      <div className=" sm:m-1 lg:mx-16 lg:my-12 ">
        <div className="flex flex-col p-4 border border-pink-400 rounded-md m-3 items-center text-wrap">
          <h1 className="lg:text-3xl text-2xl font-semibold text-wrap">
            Welcome! {user.fullName}
          </h1>
          <span className="block mt-6 font-lg font-semibold">{jobId}</span>
        </div>
        <div className="block border border-red-400 rounded-md p-5 m-3  ">
          <div className="flex items-center">
            <CgProfile className="h-12 w-12 mr-4 text-orange-600" />
            <span className="text-2xl font-sans">Contact Details</span>
          </div>

          <table className="text-gray-800">
            <col style={{ width: "15%" }} />
            <col style={{ width: "60%" }} />
            <tbody className="">
              <tr>
                <td className="p-2 font-semibold align-top">Name</td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                    value={user.fullName}
                    name="fullName"
                    onChange={handleInputChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Email</td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                    value={user.email}
                    onChange={handleInputChange}
                    name="email"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Contact</td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Enter your contact"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                    value={user.phone}
                    onChange={handleInputChange}
                    name="phone"
                  ></input>
                </td>
              </tr>

              <tr>
                <td className="p-2 font-semibold align-top">
                  Permanent Address
                </td>
                <td className="p-2 align-top">
                  <textarea
                    type="text"
                    placeholder="Permanent Address"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                    value={user?.address}
                    onChange={handleInputChange}
                    name="address"
                    rows={3}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="block border border-red-400 rounded-md p-5 m-3  ">
          <div className="flex items-center">
            <RiBriefcaseLine className="h-12 w-12 mr-4 text-orange-600" />
            <span className="text-2xl font-sans">Previous Experience</span>
          </div>
          <p className="p-2 font-semibold ">Applying for your first job</p>
          <div className="p-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="applyingForFirstJob"
                value="Yes"
                checked={isFirstJob === "Yes"}
                className="form-radio h-5 w-5 text-blue-500"
                onChange={handleRadioChange} // Add your onChange handler
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="applyingForFirstJob"
                value="No"
                checked={isFirstJob === "No"}
                className="form-radio h-5 w-5 text-blue-500"
                onChange={handleRadioChange} // Add your onChange handler
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {isFirstJob === "Yes" && (
            <div className="p-2 lg:flex items-center ">
              <input
                type="text"
                placeholder="Enter course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className=" p-2 px-2  border border-red-400 rounded-md text-sm"
              />

              <div className="lg:flex items-center ">
                <div className="lg:mx-6 lg:p-2">
                  <label className="font-semibold">From:</label>
                  <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="text-sm lg:border-2 border-red-500  lg:p-1 ml-2 rounded-md"
                  />
                </div>
                <div className="lg:mr-5 lg:p-2 mr-1">
                  <label className="font-semibold">To:</label>
                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="text-sm lg:border-2 border-red-500  lg:p-1 lg:ml-2 ml-7 rounded-md"
                  />
                </div>
              </div>
              <button
                onClick={handleAddDetails}
                className="border border-blue-500 px-6 rounded-md lg:m-2 mt-3 p-1"
              >
                Add
              </button>
            </div>
          )}

          {/* Display added job details */}
          {jobDetails.length != 0 && (
            <div className="border rounded-md hover:shadow-md text-sm overflow-x-auto">
              <table className="w-full rounded-md text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className=" p-1 max-w-8 text-center">Course</th>
                    <th className=" p-1 max-w-4 text-center">From</th>
                    <th className=" p-1 max-w-4 text-center">To</th>
                    <th className=" p-1 max-w-1 text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {jobDetails?.map((detail, index) => (
                    <tr key={index}>
                      <td className="text-sm  border p-1.5 truncate  max-w-8 text-center">
                        {detail.course}
                      </td>
                      <td className=" text-sm  border p-1.5 truncate  max-w-4 text-center">
                        {detail.fromDate}
                      </td>
                      <td className=" text-sm  border p-1.5 truncate  max-w-4 text-center">
                        {detail.toDate}
                      </td>
                      <td className="text-sm  border p-1.5 truncate  max-w-1 text-center">
                        <button
                          className="text-red-600 lg:m-1 lg:p-1 rounded hover:bg-red-600 hover:text-white"
                          onClick={() => handleDeleteDetail(index)}
                        >
                          {" "}
                          <FaTrashAlt size={12} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <button className="border border-red-500 bg-white-500 text-gray-500 hover:bg-red-500 hover:text-white font-semibold py-2 px-8 rounded-md m-3">
          Submit
        </button>
      </div>
    </div>
  );
}

export default JobApplyPage;
