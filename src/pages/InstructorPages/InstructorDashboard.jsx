import React, { useEffect, useState } from "react";
import TADetails from "./TADetails"; // Assuming the TADetails component is in a separate file
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";


const InstructorDashboard = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [tas, setTAs] = useState([]);
  const [filteredTAs, setFilteredTAs] = useState([]);
  const [selectedTA, setSelectedTA] = useState(null); // Initialize selectedTA as null
  const [isTADetailsOpen, setIsTADetailsOpen] = useState(false); // Track if TADetails is open

  const [courses, setCourses] = useState([]);

  const fetchTAs = () => {
    if (selectedCourse === "") {
      setFilteredTAs(tas);
    } else {
      setFilteredTAs(tas.filter(ta => ta?.course?.courseId === selectedCourse));
    }
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const viewTADetails = (ta) => {
    setSelectedTA(ta);
    setIsTADetailsOpen(true); // Open TADetails component
  };

  const getAllCourseAndTaList = async () => {
    try {
      let res = axiosInstance.post(`/evaluation/getAllCourseAndTaList`);

      await toast.promise(res, {
        loading: "Fetching...",
        success: (data) => {
          return data?.data?.message;
        },
        error: (data) => {
          return data?.response?.data.message;
        },
      });
      res = await res;
      if ((await res).data.success) {
        setTAs((await res).data.under)
        setFilteredTAs((await res).data.under)
        setCourses((await res).data.under.map(obj => obj.course));
        console.log('list fetched.', (await res).data.under);
      }
    } catch (error) {
      console.error("Error Fetching data", error);
      toast.error("Error Fetching data");
    }
  };
  useEffect(() => {
    getAllCourseAndTaList();
    fetchTAs();
  }, [setTAs, setSelectedCourse]);

  return (
    <div className="min-h-screen lg:m-5 m-1 p-3">
      <h1 className="text-xl md:text-3xl font-semibold mb-4">
        Instructor Dashboard
      </h1>

      {/* Course selection dropdown */}
      <div className="mb-4">
        <select
          id="course"
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-2/3 text-sm md:text-xl"
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          <option value="">Select Course</option>
          {courses.map((course, index) => (
            < option key={course._id} value={course.courseId} > {course.name}</option>
          ))}
        </select>
      </div>

      {/* Table to display TAs */}
      <div>
        <h2 className="font-semibold text-xl md:text-2xl mt-8 mb-2">
          Teaching Assistants
        </h2>
        <div className="overflow-auto text-sm md:text-lg">
          <table className="w-full border-collapse border border-gray-300 overflow-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-2 py-2 w-1/12">ID</th>
                <th className="border border-gray-300 px-4 py-2 w-1/6">Name</th>
                <th className="border border-gray-300 px-4 py-2 w-1/6">
                  Course ID
                </th>
                <th className="border border-gray-300 px-4 py-2 w-2/6">
                  Course Name
                </th>
                <th className="border border-gray-300 px-4 py-2 w-1/6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {(filteredTAs.length > 0) ? filteredTAs.map((obj, index) => (
                <tr key={obj._id}>
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {obj.ta?.fullName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {obj.course?.courseId}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {obj.course?.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => viewTADetails(obj)}
                      className="font-semibold text-blue-600 p-2 rounded-md hover:underline text-center"
                    >
                      <span className="hidden md:block">View Details</span>
                      <span className="md:hidden">View</span>
                    </button>
                  </td>
                </tr>
              )) : <div>No Teaching assistant to show.</div>}
            </tbody>
          </table>
        </div>
      </div>

      {/* Render TADetails component if selectedTA is not null */}
      {
        selectedTA && isTADetailsOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex  justify-center">
            <div className="my-3 p-2  w-11/12  bg-white md:p-6 rounded-lg lg:w-4/5 max-h-full">

              <TADetails
                selectedTA={selectedTA}
                onClose={() => setIsTADetailsOpen(false)}
              />


            </div>
          </div>)
      }
    </div >
  );
};

export default InstructorDashboard;
