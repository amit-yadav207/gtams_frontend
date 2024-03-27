import React, { useState } from "react";

const DashboardPage = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Teaching Assistant",
      courseID: "CS101",
      instructor: "Dr. John Smith",
      requirements: "Bachelor's degree in Computer Science or related field, strong communication skills.",
      departments: ["Computer Science", "Information Technology"],
    },
    {
      id: 2,
      title: "Lab Assistant",
      courseID: "BIO303",
      instructor: "Dr. Sarah Brown",
      requirements: "Bachelor's degree in Biology or related field, laboratory experience required.",
      departments: ["Biology", "Chemistry"],
    },
    {
      id: 3,
      title: "Research Assistant",
      courseID: "PHYS404",
      instructor: "Prof. Michael Davis",
      requirements: "Master's degree in Physics or related field, research experience preferred.",
      departments: ["Physics", "Engineering"],
    },
    {
      id: 4,
      title: "Grading Assistant",
      courseID: "MATH606",
      instructor: "Prof. David Wilson",
      requirements: "Bachelor's degree in Mathematics or related field, attention to detail required.",
      departments: ["Mathematics", "Statistics"],
    },
    {
      id: 5,
      title: "Tutor",
      courseID: "CHEM505",
      instructor: "Dr. Laura Martinez",
      requirements: "Master's degree in Chemistry or related field, teaching experience preferred.",
      departments: ["Chemistry", "Biochemistry"],
    },
    {
      id: 6,
      title: "Assistant Professor",
      courseID: "PHIL707",
      instructor: "Dr. Elizabeth Taylor",
      requirements: "PhD in Philosophy or related field, teaching and research experience required.",
      departments: ["Philosophy", "Ethics"],
    },
  ]);
  
  

  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle job creation
  const handleCreateJob = () => {
    console.log("Create Job button clicked");
    // Add your code to handle job creation
  };

  // Function to handle job deletion
  const handleDeleteJob = (jobId) => {
    console.log("Delete job with ID:", jobId);
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  // Function to filter jobs based on search query
  const filteredJobs = jobs.filter(
    (job) =>
      job.id.toString().includes(searchQuery) ||
      job.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.courseID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.departments.some((department) =>
        department.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 p-4">Dashboard</h1>

      <div className="flex justify-between items-center mb-4 border-green-500">
        <div className="w-full md:w-4/5 border-green-500">
          <input
            type="text"
            placeholder="Search by ID, Instructor, Title, Course ID, Department..."
            className="w-full px-4 py-2 rounded border border-gray-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>
        <div className="w-full md:w-1/5 text-right">
          <button
            className="bg-green-700 text-white px-4 py-2 rounded"
            onClick={handleCreateJob}
          >
            + Create Job
          </button>
        </div>
      </div>

      <div className="overflow-x-auto mb-4">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Course ID</th>
              <th className="px-4 py-2">Departments</th>
              <th className="px-4 py-2">Instructor</th>
              <th className="px-4 py-2">Requirements</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id}>
                <td className="border px-4 py-2">{job.id}</td>
                <td className="border px-4 py-2">{job.title}</td>
                <td className="border px-4 py-2">{job.courseID}</td>
                <td className="border px-4 py-2">
                  {job.departments.join(", ")}
                </td>
                <td className="border px-4 py-2">{job.instructor}</td>
                <td className="border px-4 py-2">{job.requirements}</td>
                <td className="border px-4 py-2 text-right">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2"
                    onClick={() => handleDeleteJob(job.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
