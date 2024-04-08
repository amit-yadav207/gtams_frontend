import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const TADetails = ({ selectedTA, onClose }) => {
  const [assignedTask, setAssignedTask] = useState("");
  const [rating, setRating] = useState("");
  const [remarks, setRemarks] = useState("");
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [previousWork, setPreviousWork] = useState([]);
  const [showPreviousSummary, setShowPreviousSummary] = useState(false);

  const assignWork = (e) => {
    e.preventDefault();
    const newTask = {
      task: assignedTask,
      rating: rating,
      remarks: remarks,
      assignedDate: new Date(),
    };
    setAssignedTasks([...assignedTasks, newTask]);
    setAssignedTask("");
    setRating("");
    setRemarks("");
  };

  // Function to filter out tasks that are not from today
  const filterTodayTasks = (tasks) => {
    const today = new Date().toLocaleDateString();
    return tasks.filter((task) => new Date(task.assignedDate).toLocaleDateString() !== today);
  };

  return (
    <div className="p-4 overflow-y-auto h-full scrollbar border rounded-lg shadow-sm">
      <div className="flex justify-end items-center mb-4">
        <button onClick={onClose}>
          <AiOutlineClose />
        </button>
      </div>
      <h2 className="mb-3 text-2xl font-semibold">TA Details</h2>

      <div className="max-h-72 overflow-auto">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="font-semibold w-2/5">ID:</td>
              <td className="w-3/5">{selectedTA.id}</td>
            </tr>
            <tr>
              <td className="font-semibold w-2/5">Name:</td>
              <td className="w-3/5">{selectedTA.name}</td>
            </tr>
            <tr>
              <td className="font-semibold w-2/5">Course ID:</td>
              <td className="w-3/5">{selectedTA.courseId}</td>
            </tr>
            <tr>
              <td className="font-semibold w-2/5">Course Name:</td>
              <td className="w-3/5">{selectedTA.courseName}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="font-semibold text-2xl mt-6 mb-3">Add Today's Work Summary</h3>
        <form onSubmit={assignWork}>
          <div className="mb-3 flex justify-start space-x-8">
            <label htmlFor="work" className="font-semibold">Today's Work:</label>
            <input
              type="text"
              id="work"
              value={assignedTask}
              onChange={(e) => setAssignedTask(e.target.value)}
              placeholder="Enter task..."
              className="w-1/2 px-2 py-1 border rounded-md border-gray-700"
            />
          </div>

          <div className="mb-3 flex justify-start space-x-20">
            <label htmlFor="rating" className="font-semibold">Rating:</label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Enter rating..."
              className="w-1/2 px-2 py-1 border rounded-md border-gray-700"
              min="0"
              max="10"
            />
          </div>

          <div className="mb-3 flex justify-start space-x-16">
            <label htmlFor="remarks" className="font-semibold">Remarks:</label>
            <textarea
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Enter remarks..."
              className="w-1/2 px-2 py-1 border rounded-md border-gray-700"
            ></textarea>
          </div>

          <div className="mb-3 flex justify-center">
            <button
              type="submit"
              className="ml-3 px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold md:text-2xl mb-4 text-xl">
          Today's Work Summary
        </h3>
        <div className="border border-black rounded-sm text-sm md:text-md overflow-auto">
          <table className="border-collapse w-full md:text-md text-sm">
            <thead>
              <tr>
                <th className="bg-gray-600 text-white py-.5 md:py-2 w-1/10 text-center px-2">
                  Sr.No.
                </th>
                <th className="bg-gray-600 text-white py-.5 md:py-2 w-4/6 text-center">
                  Task
                </th>
                <th className="bg-gray-600 text-white py-.5 md:py-2 w-1/20 text-center">
                  Rating(10)
                </th>
                <th className="bg-gray-600 text-white py-.5 md:py-2 w-2/6 text-center">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody>
              {assignedTasks.map((task, index) => (
                <tr key={index}>
                  <td className="border py-2 w-1/10 px-2">{index + 1}</td>
                  <td className="border py-2 w-4/6 px-2">{task.task}</td>
                  <td className="border py-2 w-1/20 text-center">{task.rating}</td>
                  <td className="border py-2 w-2/6 px-2">{task.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={() => setShowPreviousSummary(!showPreviousSummary)}
          className="px-4 py-2 bg-gray-300 rounded-md text-gray-800 hover:bg-gray-400 focus:outline-none"
        >
          {showPreviousSummary ? "Hide" : "Show"} Previous Work Summary
        </button>
      </div>

      {showPreviousSummary && (
        <div className="mt-6">
          <h3 className="font-semibold md:text-2xl mb-4 text-xl">
            Previous Work Summary
          </h3>
          <div className="border border-black rounded-sm text-sm md:text-md overflow-auto">
            <table className="border-collapse w-full md:text-md text-sm">
              <thead>
                <tr>
                  <th className="bg-gray-600 text-white py-.5 md:py-2 w-1/10 text-center px-2">
                    Sr.No.
                  </th>
                  <th className="bg-gray-600 text-white py-.5 md:py-2 w-4/6 text-center">
                    Task
                  </th>
                  <th className="bg-gray-600 text-white py-.5 md:py-2 w-1/20 text-center">
                    Rating(10)
                  </th>
                  <th className="bg-gray-600 text-white py-.5 md:py-2 w-2/6 text-center">
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterTodayTasks(previousWork).map((task, index) => (
                  <tr key={index}>
                    <td className="border py-2 w-1/10 px-2">{index + 1}</td>
                    <td className="border py-2 w-4/6 px-2">{task.task}</td>
                    <td className="border py-2 w-1/20 text-center">{task.rating}</td>
                    <td className="border py-2 w-2/6 px-2">{task.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TADetails;
