import React, { useState, useEffect } from "react";
import { FaSearch, FaTrash } from "react-icons/fa"; // Importing React Icons
import toast from "react-hot-toast";
const CourseCreation = () => {
  const [courses, setCourses] = useState([]); // State for courses
  const [formData, setFormData] = useState({
    // State for form data
    courseName: "",
    courseId: "",
    department: "",
    // Add other fields as needed for course creation
  });
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  // Dummy data for demonstration
  const dummyCourses = [
    {
      id: 1,
      courseName: "Course 1",
      courseId: "C001",
      department: "Department A",
    },
    {
      id: 2,
      courseName: "Course 2",
      courseId: "C002",
      department: "Department B",
    },
    // Add more dummy courses as needed
  ];

  // Fetch courses from backend or set dummy data on component mount
  useEffect(() => {
    setCourses(dummyCourses);
  }, []);

  // Function to handle form submission for creating new course
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle course creation, e.g., sending data to backend
    console.log("Form submitted with data:", formData);
    // Update state to include the newly created course
    const newCourse = {
      id: courses.length + 1, // Generate ID dynamically (for demo only)
      ...formData,
    };
    setCourses([...courses, newCourse]);
    // Clear form fields after submission
    setFormData({
      courseName: "",
      courseId: "",
      department: "",
      // Reset other fields as needed
    });
  };

  // Function to handle delete button click
  const handleDelete = (courseId) => {
    // Add logic to delete course, e.g., sending delete request to backend
    console.log("Deleting course with ID:", courseId);
    // Update state to remove the deleted course
    const result = window.confirm("Are you sure you want to proceed?");
    if (result) {
      const updatedCourses = courses.filter((course) => course.id !== courseId);
      setCourses(updatedCourses);
      toast.success(`deleting course with courseId ${courseId}`);
    } else {
      toast.success(`Cancelled`);
    }
  };

  // Filter courses based on search term
  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen lg:m-5 m-1 p-3">
      <h1 className="text-xl md:text-3xl font-semibold mb-4">
        Course Management
      </h1>
      {/* Course Creation Form */}
      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Course Name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-2/5 text-sm md:text-xl"
              value={formData.courseName}
              onChange={(e) =>
                setFormData({ ...formData, courseName: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Course ID"
              className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/5 text-sm md:text-xl"
              value={formData.courseId}
              onChange={(e) =>
                setFormData({ ...formData, courseId: e.target.value })
              }
              required
            />
            <select
              className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-2/5 text-sm md:text-xl"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              required
            >
              <option value="">Select Department</option>
              <option value="Department A">Department A</option>
              <option value="Department B">Department B</option>
              {/* Add more options as needed */}
            </select>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 md:px-3 md:py-2 rounded-md hover:bg-blue-600 text-sm md:text-xl md:w-1/5"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>

      {/* Search input */}
      <div className="mb-4 flex items-center">
        {" "}
        {/* Adding flex container to align items center */}
        <div className="relative w-full">
          {" "}
          {/* Adding relative positioning */}
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />{" "}
          {/* Adding search icon */}
          <input
            type="text"
            placeholder="Search courses..."
            className="border border-gray-300 rounded-md pl-10 px-4 py-2 w-full md:w-3/5 text-sm md:text-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>
      </div>

      {/* Course List */}
      <div className="mt-4">
        <h1 className="font-semibold text-xl md:text-2xl mt-8 mb-2">
          Course List
        </h1>
        <div className="overflow-x-auto overflow-y-auto max-h-96 scrollBar">
          <table className="w-full border-collapse border border-gray-300 overflow-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-2 py-2 w-1/20">
                  Sr.No.
                </th>
                <th className="border border-gray-300 px-4 py-2 w-2/5">
                  Course Name
                </th>
                <th className="border border-gray-300 px-4 py-2 w-2/5">
                  Course ID
                </th>
                <th className="border border-gray-300 px-4 py-2 w-2/5">
                  Department
                </th>
                <th className="border border-gray-300 px-3 py-2 w-1/20">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course, index) => (
                <tr key={course.id} className="text-md md:text-lg">
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.courseName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.courseId}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.department}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(course.id)}
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
    </div>
  );
};

export default CourseCreation;
