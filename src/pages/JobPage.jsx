import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const JobPage = () => {
  // Sample job data
  const [jobs] = useState([
    {
      id: 1,
      title: "Teaching Assistant",
      courseID: "CS101",
      instructor: "Dr. John Smith",
      requirements:
        "Bachelor's degree in Computer Science or related field, strong communication skills.",
      departments: ["Computer Science", "Information Technology"],
      location: "New York, NY",
    },
    {
      id: 2,
      title: "Teaching Assistant",
      courseID: "ENG202",
      instructor: "Prof. Emily Johnson",
      requirements:
        "Master's degree in English Literature or related field, previous teaching experience.",
      departments: ["English", "Literature"],
      location: "Los Angeles, CA",
    },
    {
      id: 3,
      title: "Research Assistant",
      courseID: "MATH301",
      instructor: "Dr. Sarah Brown",
      requirements:
        "Ph.D. in Mathematics or related field, research experience in algebraic geometry.",
      departments: ["Mathematics", "Statistics"],
      location: "Chicago, IL",
    },
    {
      id: 4,
      title: "Lab Assistant",
      courseID: "CHEM201",
      instructor: "Prof. Michael Davis",
      requirements:
        "Bachelor's degree in Chemistry or related field, lab experience preferred.",
      departments: ["Chemistry", "Biochemistry"],
      location: "Houston, TX",
    },
    {
      id: 5,
      title: "Teaching Assistant",
      courseID: "PHY101",
      instructor: "Dr. Rachel White",
      requirements:
        "Master's degree in Physics or related field, experience in teaching preferred.",
      departments: ["Physics", "Astrophysics"],
      location: "San Francisco, CA",
    },
    {
      id: 6,
      title: "Teaching Assistant",
      courseID: "PSYCH101",
      instructor: "Prof. David Miller",
      requirements:
        "Bachelor's degree in Psychology or related field, good interpersonal skills.",
      departments: ["Psychology", "Counseling"],
      location: "Miami, FL",
    },
    {
      id: 7,
      title: "Research Assistant",
      courseID: "BIO101",
      instructor: "Dr. Lisa Johnson",
      requirements:
        "Bachelor's degree in Biology or related field, research experience in molecular biology.",
      departments: ["Biology", "Biotechnology"],
      location: "Seattle, WA",
    },
    {
      id: 8,
      title: "Lab Assistant",
      courseID: "ENGR201",
      instructor: "Prof. Adam Wilson",
      requirements:
        "Bachelor's degree in Engineering or related field, lab experience preferred.",
      departments: ["Engineering", "Mechanical Engineering"],
      location: "Boston, MA",
    },
    {
      id: 9,
      title: "Teaching Assistant",
      courseID: "HIST101",
      instructor: "Prof. Sarah Brown",
      requirements:
        "Master's degree in History or related field, previous teaching experience.",
      departments: ["History", "Archeology"],
      location: "Denver, CO",
    },
    {
      id: 10,
      title: "Teaching Assistant",
      courseID: "ART101",
      instructor: "Dr. Robert Jackson",
      requirements:
        "Bachelor's degree in Fine Arts or related field, teaching experience in art preferred.",
      departments: ["Fine Arts", "Visual Arts"],
      location: "Portland, OR",
    },
    {
      id: 11,
      title: "Research Assistant",
      courseID: "ECON201",
      instructor: "Prof. Jennifer Lee",
      requirements:
        "Master's degree in Economics or related field, research experience in econometrics.",
      departments: ["Economics", "Finance"],
      location: "Austin, TX",
    },
    {
      id: 12,
      title: "Lab Assistant",
      courseID: "PHIL201",
      instructor: "Dr. Mark Roberts",
      requirements:
        "Bachelor's degree in Philosophy or related field, critical thinking skills.",
      departments: ["Philosophy", "Ethics"],
      location: "Washington, D.C.",
    },
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter job listings based on search query
  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.courseID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.departments.some((dept) =>
        dept.toLowerCase().includes(searchQuery.toLowerCase())
      ) // Include department search
    );
  });

  //   Function to handle click on "See Details" button
  const handleSeeDetails = (jobId) => {
    // Code to show full details of the job with jobId
    console.log("See Details clicked for job with ID:", jobId);
    navigate("/job_details/" + jobId);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Job Listings</h1>
      {/* Search bar with icon */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search by title, course, instructor, or department"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border border-gray-300 rounded px-4 py-2 pr-10 w-full"
          autoFocus
        />
        <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
      </div>
      {/* Grid layout for job cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Map through filtered job data and render cards */}
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-md rounded-md p-6 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="mb-2">
              <strong>Course ID:</strong> {job.courseID}
            </p>
            <p className="mb-2">
              <strong>Instructor:</strong> {job.instructor}
            </p>
            <p className="mb-2">
              <strong>Requirements:</strong>{" "}
              {job.requirements.length > 50
                ? `${job.requirements.slice(0, 50)}...`
                : job.requirements}
            </p>
            <p className="mb-2">
              <strong>Departments:</strong> {job.departments.join(", ")}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Location:</strong> {job.location}
            </p>
        
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => handleSeeDetails(job.id)}
            >
              See Details
            </button>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default JobPage;
