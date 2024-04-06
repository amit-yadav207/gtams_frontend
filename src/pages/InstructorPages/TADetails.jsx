import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const TADetails = ({ selectedTA, onClose }) => {
  const [assignedTask, setAssignedTask] = useState("");
  const [assignedTasks, setAssignedTasks] = useState([]);

  const assignWork = (e) => {
    e.preventDefault();
    // Implement assignWork function
    const newTask = {
      task: assignedTask,
      assignedDate: new Date(),
      rating: "",
    };
    setAssignedTasks([...assignedTasks, newTask]);
    setAssignedTask("");
  };

  const handleRatingChange = (e, index) => {
    const { value } = e.target;
    const updatedTasks = [...assignedTasks];
    updatedTasks[index].rating = value;
    setAssignedTasks(updatedTasks);
  };

  const calculateAverageRating = () => {
    // Filter out tasks with valid ratings
    const ratedTasks = assignedTasks.filter(task => !isNaN(task.rating));
  
    // Calculate the total rating and count of rated tasks
    const totalRating = ratedTasks.reduce((acc, task) => acc + Number(task.rating), 0);
    const numberOfRatedTasks = ratedTasks.length;
  
    // Calculate the average rating
    const averageRating = numberOfRatedTasks > 0 ? totalRating / numberOfRatedTasks : 0;
  
    // Return the average rating rounded to 2 decimal places
    return averageRating.toFixed(2);
  };
  

  return (
    <div className="mt-1 m-2 p-4 overflow-auto">
      {/* Details of TA */}
      <div className="flex justify-between item-center   mb-3">
        <h2 className="text-2xl font-semibold">TA Details</h2>
        {/* Close button */}
        <button onClick={onClose}>
          <AiOutlineClose />
        </button>
      </div>
      <div className=" ">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="font-semibold w-1/4">ID:</td>
              <td className="w-3/4">{selectedTA.id}</td>
            </tr>
            <tr>
              <td className="font-semibold w-1/4">Name:</td>
              <td className="w-3/4">{selectedTA.name}</td>
            </tr>
            <tr>
              <td className="font-semibold w-1/4">Course ID:</td>
              <td className="w-3/4">{selectedTA.courseId}</td>
            </tr>
            <tr>
              <td className="font-semibold w-1/4">Course Name:</td>
              <td className="w-3/4">{selectedTA.courseName}</td>
            </tr>
          </tbody>
        </table>
        {/* Average Rating */}
        <div>
          <h3 className="text-2xl font-semibold mt-2">Average Rating</h3>
          <p className="border  inline-block p-1 rounded-md bg-green-400 text-white font-semibold">
            {calculateAverageRating()}
          </p>
        </div>
      </div>
      {/* Assign Work */}
      <div>
        <h3 className="font-semibold text-2xl mt-4 mb-3">Assign Work</h3>
        {/* Input fields to assign work */}
        <form onSubmit={assignWork}>
          <input
            type="text"
            value={assignedTask}
            onChange={(e) => setAssignedTask(e.target.value)}
            placeholder="Enter task..."
            className="w-1/2 px-2 py-1 border rounded-md border-gray-700"
          />
          <button
            onSubmit={assignWork}
            className="ml-3  px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Assign
          </button>
        </form>
      </div>

      {/* Display Assigned Work */}

      <div className="w-full overflow-auto ">
        <h3 className="font-semibold text-2xl mt-6 mb-4">Assigned Work(s)</h3>
        <div class="w-full overflow-auto max-h-28 border border-black rounded-sm text-sm md:text-md ">
          <table className="border border-collapse w-full  ">
            <thead className="border border-collapse">
              <tr>
                <th className="bg-gray-600 text-white border py-.5 md:py-2 w-3/6 text-center text-sm md:text-md">
                  Task
                </th>
                <th className="bg-gray-600 text-white border py-.5 md:py-2  text-center text-sm md:text-md">
                  Assigned Date
                </th>
                <th className="bg-gray-600 text-white border py-.5 md:py-2 w-1/5 text-center text-sm md:text-md">
                  Rating(10)
                </th>
              </tr>
            </thead>
            <tbody>
              {assignedTasks.map((task, index) => (
                <tr key={index}>
                  <td className="border py-2 w-3/5 text-center">{task.task}</td>
                  <td className="border py-2 w-1/5 text-center">
                    {task.assignedDate.toLocaleDateString()}
                  </td>
                  <td className="border py-2 w-full text-center">
                    <input
                      type="number"
                      value={task.rating}
                      onChange={(e) => handleRatingChange(e, index)}
                      min="0"
                      max="10"
                      className="w-2/5 md:w-1/5"
                    />
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

export default TADetails;
