import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
const dummyUserData = {
  fullName: "John Doe",
  email: "john@example.com",
  contact: "+1234567890",
  address:
    "123 Main St, City, Country123 Main St, City, Country123 Main St, City, Country123 Main St, City, Country123 Main St, City, Country123 Main St, City, Country123 Main St, City, Country",
  qualification: "Bachelor's Degree in Computer Science",
  imageUrl: "https://avatar.iran.liara.run/public/boy", // Placeholder image URL
};

function ProfilePage({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...dummyUserData });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Here you can perform any action with the editedUser data
    // For example, you can send it to an API for updating the user data
    console.log("Edited user data:", editedUser);
    // Once saved, toggle back to read-only mode
    setIsEditing(false);
  };

  return (
    <div
      className="container sm:p-1 h-full  lg:min-h-screen "
      style={{ minHeight: "85vh" }}
    >
      <div className=" sm:m-1 border border-black">
        <div className="flex flex-col p-4 border border-pink-400 rounded-md m-3 items-center">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="image of user"
            className="w-32 h-32 mb-0.5 hover:border-2 rounded-full border-gray-400"
          />
          <div className="w-half   text-gray-700  rounded-md lg:text-md  text-center font-bold font-sans">
            AMIT YADAV
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md m-3">
          Edit
        </button>
        {/*<div className="block border border-red-400 rounded-md p-5 m-3">Resume</div>*/}
        <div className="block border border-red-400 rounded-md p-5 m-3">
          <div className="flex items-center">
            <CgProfile className="h-12 w-12 mr-4 text-orange-600" />
            <span className="text-2xl font-sans">Contact Details</span>
          </div>

          <table className="text-gray-800">
            <tbody className="">
              <tr>
                <td className="p-2 font-semibold align-top">Name</td>
                <td className="p-2 align-top">{dummyUserData.fullName}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Email</td>
                <td className="p-2 align-top">{dummyUserData.email}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Contact</td>
                <td className="p-2 align-top">{dummyUserData.contact}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Address</td>
                <td className="p-2 align-top">{dummyUserData.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="block border border-red-400 rounded-md p-5 m-3">
          Higher Education
        </div>
        <div className="block border border-red-400 rounded-md p-5 m-3">
          Prev experience
        </div>
        <div className="block border border-red-400 rounded-md p-5 m-3">
          Skills
        </div>
        {/*<div className="block border border-red-400 rounded-md p-5 m-3">
          Cover letter
  </div>*/}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md m-3">
          Edit
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
