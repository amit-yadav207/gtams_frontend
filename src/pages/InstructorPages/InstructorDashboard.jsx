// import React, { useEffect, useState } from "react";
// import TADetails from "./TADetails"; // Assuming the TADetails component is in a separate file
// import axiosInstance from "../../Helper/axiosInstance";
// import toast from "react-hot-toast";

// const InstructorDashboard = () => {
//   const [selectedCourse, setSelectedCourse] = useState("");
//   const [tas, setTAs] = useState([]);
//   const [filteredTAs, setFilteredTAs] = useState([]);
//   const [selectedTA, setSelectedTA] = useState(null); // Initialize selectedTA as null
//   const [isTADetailsOpen, setIsTADetailsOpen] = useState(false); // Track if TADetails is open

//   const [courses, setCourses] = useState([]);

//   const fetchTAs = () => {
//     if (selectedCourse === "") {
//       setFilteredTAs(tas);
//     } else {
//       setFilteredTAs(
//         tas.filter((ta) => ta?.course?.courseId === selectedCourse)
//       );
//     }
//   };

//   const handleCourseChange = (e) => {
//     setSelectedCourse(e.target.value);
//   };

//   const viewTADetails = (ta) => {
//     setSelectedTA(ta);
//     setIsTADetailsOpen(true); // Open TADetails component
//   };

//   const getAllCourseAndTaList = async () => {
//     try {
//       let res = axiosInstance.post(`/evaluation/getAllCourseAndTaList`);

//       await toast.promise(res, {
//         loading: "Fetching...",
//         success: (data) => {
//           return data?.data?.message;
//         },
//         error: (data) => {
//           return data?.response?.data.message;
//         },
//       });
//       res = await res;
//       if ((await res).data.success) {
//         setTAs((await res).data.under);
//         setFilteredTAs((await res).data.under);
//         setCourses((await res).data.under.map((obj) => obj.course));
//         console.log("list fetched.", (await res).data.under);
//       }
//     } catch (error) {
//       console.error("Error Fetching data", error);
//       toast.error("Error Fetching data");
//     }
//   };
//   useEffect(() => {
//     getAllCourseAndTaList();
//     fetchTAs();
//   }, [setTAs, setSelectedCourse]);

//   return (
//     <div className="min-h-screen  p-3 md:p-8 bg-slate-50">
//       <div className="bg-white p-5  rounded-lg shadow-md">
//         <h1 className="text-xl md:text-3xl font-semibold mb-4">
//           Instructor Dashboard
//         </h1>

//         {/* Course selection dropdown */}
//         <div className="mb-4">
//           <select
//             id="course"
//             className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-2/3 text-sm md:text-xl"
//             value={selectedCourse}
//             onChange={handleCourseChange}
//           >
//             <option value="">Select Course</option>
//             {courses.map((course, index) => (
//               <option key={course._id} value={course.courseId}>
//                 {course.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       {/* Table to display TAs */}
//       <div className=" max-h-screen min-h-96 p-5 rounded-lg shadow-lg bg-white mt-6">
//         <h2 className="font-semibold text-xl md:text-2xl mt-3 mb-2">
//           Teaching Assistants
//         </h2>
//         <div className="overflow-auto text-sm md:text-lg rounded-t-lg">
//           <table className="w-full border-collapse border border-gray-300 overflow-auto">
//             <thead>
//               <tr className="bg-gray-600 text-white">
//                 <th className="border border-gray-300 px-2 py-2 w-1/12">ID</th>
//                 <th className="border border-gray-300 px-4 py-2 w-1/6">Name</th>
//                 <th className="border border-gray-300 px-4 py-2 w-1/6">
//                   Course ID
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2 w-2/6">
//                   Course Name
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2 w-1/6">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTAs.length > 0 ? (
//                 filteredTAs.map((obj, index) => (
//                   <tr key={obj._id}>
//                     <td className="border border-gray-300 px-4 py-2 text-center w-1/12">
//                       {index + 1}
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2 text-center w-1/6">
//                       {obj.ta?.fullName}
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2 text-center w-1/6">
//                       {obj.course?.courseId}
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2 text-center w-2/6">
//                       {obj.course?.name}
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2 text-center w-1/6">
//                       <button
//                         onClick={() => viewTADetails(obj)}
//                         className="font-semibold text-blue-600 p-2 rounded-md hover:underline text-center"
//                       >
//                         <span className="hidden md:block">View Details</span>
//                         <span className="md:hidden">View</span>
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="5"
//                     className="border border-gray-300 px-4 py-2 text-center"
//                   >
//                     No Teaching assistant to show.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Render TADetails component if selectedTA is not null */}
//       {selectedTA && isTADetailsOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 bg-cover flex  justify-center">
//           <div className="my-4 p-1  w-11/12  bg-white md:p-4 rounded-lg lg:w-4/5 max-h-full border relative">
//             <TADetails
//               selectedTA={selectedTA}
//               onClose={() => setIsTADetailsOpen(false)}
//             />
//           </div>
//         </div>
//       )}

//       <div className=" absolute bottom-1 md:right-16 right-8">
//         <button
//           className=" text-sm md:text-lg px-4 md:px-7 py-1 border  bg-slate-600  rounded-md hover:bg-slate-700 text-white border-none shadow-md cursor-pointer"
//           onClick={() => navigate(-1)}
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InstructorDashboard;

import React, { useEffect, useState } from "react";
import CourseSelectionDropdown from "./CourseSelectionDropdown";
import TATable from "./TATable";
import TADetailsModal from "./TADetailsModal";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

const InstructorDashboard = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [tas, setTAs] = useState([]);
  const [filteredTAs, setFilteredTAs] = useState([]);
  const [selectedTA, setSelectedTA] = useState(null);
  const [isTADetailsOpen, setIsTADetailsOpen] = useState(false);

  const [courses, setCourses] = useState([]);

  const fetchTAs = () => {
    if (selectedCourse === "") {
      setFilteredTAs(tas);
    } else {
      setFilteredTAs(
        tas.filter((ta) => ta?.course?.courseId === selectedCourse)
      );
    }
  };

  const handleCourseChange = (courseId) => {
    setSelectedCourse(courseId);
  };

  const viewTADetails = (ta) => {
    setSelectedTA(ta);
    setIsTADetailsOpen(true);
  };

  const getAllCourseAndTaList = async () => {
    try {
      let res = axiosInstance.post(`/evaluation/getAllCourseAndTaList`);

      await toast.promise(res, {
        loading: "Fetching...",
        success: (data) => data?.data?.message,
        error: (data) => data?.response?.data.message,
      });

      res = await res;
      if (res.data.success) {
        setTAs(res.data.under);
        setFilteredTAs(res.data.under);
        setCourses(res.data.under.map((obj) => obj.course));
      }
    } catch (error) {
      console.error("Error Fetching data", error);
      toast.error("Error Fetching data");
    }
  };

  useEffect(() => {
    getAllCourseAndTaList();
  }, []);

  useEffect(() => {
    fetchTAs();
  }, [selectedCourse]);

  return (
    <div className="min-h-screen p-3 md:p-8 bg-slate-50">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h1 className="text-xl md:text-3xl font-semibold mb-4">
          Instructor Dashboard
        </h1>
        <CourseSelectionDropdown
          courses={courses}
          selectedCourse={selectedCourse}
          handleCourseChange={handleCourseChange}
        />
      </div>

      <TATable filteredTAs={filteredTAs} viewTADetails={viewTADetails} />

      {selectedTA && isTADetailsOpen && (
        <TADetailsModal
          selectedTA={selectedTA}
          onClose={() => setIsTADetailsOpen(false)}
        />
      )}

     
    </div>
  );
};

export default InstructorDashboard;
