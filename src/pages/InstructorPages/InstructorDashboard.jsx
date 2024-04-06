import React, { useState } from "react";
import TADetails from "./TADetails"; // Assuming the TADetails component is in a separate file

const InstructorDashboard = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [tas, setTAs] = useState([]);
  const [selectedTA, setSelectedTA] = useState(null); // Initialize selectedTA as null
  const [isTADetailsOpen, setIsTADetailsOpen] = useState(false); // Track if TADetails is open

  const dummyTAs = [
    { id: 1, name: "TA 1", courseId: "C001", courseName: "Course 1" },
    { id: 2, name: "TA 2", courseId: "C001", courseName: "Course 1" },
    { id: 3, name: "TA 3", courseId: "C002", courseName: "Course 2" },
  ];

  const fetchTAs = (courseId) => {
    if (courseId !== "$$$") {
      const filteredTAs = dummyTAs.filter((ta) => ta.courseId === courseId);
      setTAs(filteredTAs);
    } else {
      setTAs(dummyTAs);
    }
  };

  const handleCourseChange = (e) => {
    const courseId = e.target.value;
    setSelectedCourse(courseId);
    fetchTAs(courseId);
  };

  const viewTADetails = (ta) => {
    setSelectedTA(ta);
    setIsTADetailsOpen(true); // Open TADetails component
  };

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
          <option value="$$$">Select Course</option>
          <option value="C001">Course 1</option>
          <option value="C002">Course 2</option>
          {/* Add more courses as needed */}
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
              {tas.map((ta) => (
                <tr key={ta.id}>
                  <td className="border border-gray-300 px-4 py-2">{ta.id}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {ta.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {ta.courseId}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {ta.courseName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => viewTADetails(ta)}
                      className="font-semibold text-blue-600 p-2 rounded-md hover:underline text-center"
                    >
                      <span className="hidden md:block">View Details</span>
                      <span className="md:hidden">View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Render TADetails component if selectedTA is not null */}
      {selectedTA && isTADetailsOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex  justify-center">
        <div className="my-3 p-2  w-11/12  bg-white md:p-6 rounded-lg lg:w-4/5 max-h-full">
        
            <TADetails
              selectedTA={selectedTA}
              onClose={() => setIsTADetailsOpen(false)}
            />
        
         
        </div>
      </div> )}
    </div>
  );
};

export default InstructorDashboard;
