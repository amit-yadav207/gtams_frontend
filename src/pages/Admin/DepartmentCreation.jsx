import React, { useState, useEffect } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal"; // Import React Modal

const DepartmentCreation = () => {
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    departmentName: "",
    departmentId: "",
    courses: [], // Array of courses for each department
    // Add other fields as needed for department creation
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartmentCourses, setSelectedDepartmentCourses] = useState(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data for demonstration
  const dummyDepartments = [
    {
      id: 1,
      departmentName: "Department A",
      departmentId: "D001",
      courses: [
        { courseId: "C001", courseName: "Course 1" },
        { courseId: "C002", courseName: "Course 2" },
      ],
    },
    {
      id: 2,
      departmentName: "Department B",
      departmentId: "D002",
      courses: [
        { courseId: "C003", courseName: "Course 3" },
        { courseId: "C004", courseName: "Course 4" },
      ],
    },
    // Add more dummy departments as needed
  ];

  // Fetch departments from backend or set dummy data on component mount
  useEffect(() => {
    setDepartments(dummyDepartments);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    const newDepartment = {
      id: departments.length + 1,
      ...formData,
    };
    setDepartments([...departments, newDepartment]);
    setFormData({
      departmentName: "",
      departmentId: "",
      courses: [],
      // Reset other fields as needed
    });
  };

  const handleDelete = (departmentId) => {
    console.log("Deleting department with ID:", departmentId);
    const updatedDepartments = departments.filter(
      (dept) => dept.id !== departmentId
    );
    setDepartments(updatedDepartments);
  };

  const handleSeeCourses = (departmentCourses) => {
    setSelectedDepartmentCourses(departmentCourses);
    setIsModalOpen(true);
  };

  const filteredDepartments = departments.filter((dept) =>
    dept.departmentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen lg:m-5 m-1 p-3">
      <h1 className="text-xl md:text-3xl font-semibold mb-4">
        Department Management
      </h1>
      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Department Name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-2/5 text-sm md:text-xl"
              value={formData.departmentName}
              onChange={(e) =>
                setFormData({ ...formData, departmentName: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Department ID"
              className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/5 text-sm md:text-xl"
              value={formData.departmentId}
              onChange={(e) =>
                setFormData({ ...formData, departmentId: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 md:px-3 md:py-2 rounded-md hover:bg-blue-600 text-sm md:text-xl md:w-1/5"
            >
              Create Department
            </button>
          </div>
        </form>
      </div>
      <div className="mb-4 flex items-center">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Search departments..."
            className="border border-gray-300 rounded-md pl-10 px-4 py-2 w-full md:w-3/5 text-sm md:text-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <div className="mt-4">
        <h1 className="font-semibold text-xl md:text-2xl mt-8 mb-2">
          Department List
        </h1>
        <div className="overflow-x-auto overflow-y-auto max-h-96 scrollBar">
          <table className="w-full border-collapse border border-gray-300 overflow-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-2 py-2 w-1/20">
                  Sr.No.
                </th>
                <th className="border border-gray-300 px-4 py-2 w-2/5">
                  Department Name
                </th>
                <th className="border border-gray-300 px-4 py-2 w-2/5">
                  Department ID
                </th>
                <th className="border border-gray-300 px-4 py-2 w-1/10">
                  Courses
                </th>
                <th className="border border-gray-300 px-3 py-2 w-1/20">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredDepartments.map((dept, index) => (
                <tr key={dept.id} className="text-md md:text-lg ">
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {dept.departmentName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {dept.departmentId}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleSeeCourses(dept.courses)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      See
                    </button>
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button
                      onClick={() => handleDelete(dept.id)}
                      className="text-red-500 hover:text-red-600"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0 , 0, 0.75)", // Background color with opacity
          },
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Courses</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="font-semibold text-gray-800 border rounded p-2 hover:bg-red-600 hover:text-white"
          >
            <AiOutlineClose />
          </button>
        </div>
        <table className="w-full border-collapse border border-gray-300 ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-2 py-2 ">Sr.No.</th>
              <th className="border border-gray-300 px-4 py-2">Course Name</th>
              <th className="border border-gray-300 px-4 py-2">Course ID</th>
            </tr>
          </thead>
          <tbody>
            {selectedDepartmentCourses.map((course, index) => (
              <tr key={index} className="text-md">
                <td className="border border-gray-300 px-2 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {course.courseName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {course.courseId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    </div>
  );
};

export default DepartmentCreation;
