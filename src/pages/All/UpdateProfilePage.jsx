import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";
import { RiBriefcaseLine } from "react-icons/ri";
import { IoMdConstruct } from "react-icons/io";
const dummyUserData = {
  fullName: "John Doe",
  email: "john@example.com",
  contact: "+1234567890",
  address:
    "123 Main St, City, Country123 Main St, City, Country123 Main St, City, Country123 Main St, City, Country123 Main St, City, Country123 Main St, City, Country123 Main St, City, Country",
  qualification: "Bachelor's Degree in Computer Science",
  imageUrl: "https://avatar.iran.liara.run/public/boy", // Placeholder image URL
};

function UpdateProfilePage({ user }) {
  const [editedUser, setEditedUser] = useState({ ...dummyUserData });

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
      <div className=" sm:m-1 lg:m-4 ">
        <div className="flex flex-col p-4 border border-pink-400 rounded-md m-3 items-center">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="image of user"
            className="w-32 h-32 mb-0.5 hover:border-2 rounded-full border-red-200"
          />
          <div className="w-half   text-gray-700  rounded-md lg:text-md  text-center font-bold font-sans">
            JOHN DOE
          </div>
        </div>
        <div className="flex justify-between">
          <button className="border border-red-500 bg-white-500 text-gray-500 hover:bg-red-500 hover:text-white font-semibold py-2 px-8 rounded-md m-3">
            Cancel
          </button>
          <button className="border border-red-500 bg-white-500 text-gray-500 hover:bg-red-500 hover:text-white font-semibold py-2 px-8 rounded-md m-3">
            Save
          </button>
        </div>
        {/*<div className="block border border-red-400 rounded-md p-5 m-3">Resume</div>*/}

        <div className="block border border-red-400 rounded-md p-5 m-3  ">
          <div className="flex items-center">
            <CgProfile className="h-12 w-12 mr-4 text-orange-600" />
            <span className="text-2xl font-sans"> Contact Details</span>
          </div>

          <table className="text-gray-800">
            <col style={{ width: "15%" }} /> {/* Set width of first column */}
            <col style={{ width: "60%" }} /> {/* Set width of second column */}
            <tbody className="">
              <tr>
                <td className="p-2 font-semibold align-top">Name</td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Email</td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Contact</td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Enter your contact"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                  ></input>
                </td>
              </tr>

              <tr>
                <td className="p-2 font-semibold align-top">
                  Permanent Address
                </td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Permanent Address"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="block border border-red-400 rounded-md p-5 m-3  ">
          <div className="flex items-center">
            <FaGraduationCap className="h-12 w-12 mr-4 text-orange-600" />
            <span className="text-2xl font-sans"> Higher Education</span>
          </div>

          <table className="text-gray-800">
            <col style={{ width: "15%" }} /> {/* Set width of first column */}
            <col style={{ width: "60%" }} /> {/* Set width of second column */}
            <tbody className="">
              <tr>
                <td className="p-2 font-semibold align-top">School</td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Enter your School"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Degree</td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Enter your Degree"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Degree Status</td>
                <td className="p-2 align-top">
                  <select
                    className="p-1  md:w-12  lg:w-5/6  border border-red-500 rounded-md"
                    onChange={handleInputChange} // Add your onChange handler
                  >
                    <option value="" disabled selected>
                      Select Status
                    </option>
                    <option value="graduated">Graduated</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="attending">Now Attending</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td className="p-2 font-semibold align-top">
                  Major/Area of Study
                </td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Major/Area of Study"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="block border border-red-400 rounded-md p-5 m-3  ">
          <div className="flex items-center">
            <RiBriefcaseLine className="h-12 w-12 mr-4 text-orange-600" />
            <span className="text-2xl font-sans">Previous Experience</span>
          </div>
          <div>
            <p className="p-2 font-semibold">Applying for your first job</p>
            <div className="p-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="applyingForFirstJob"
                  value="yes"
                  className="form-radio h-5 w-5 text-blue-500"
                  onChange={handleInputChange} // Add your onChange handler
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="applyingForFirstJob"
                  value="no"
                  className="form-radio h-5 w-5 text-blue-500"
                  onChange={handleInputChange} // Add your onChange handler
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {/** 
            <table className="text-gray-800">
              <col style={{ width: "15%" }} /> 
              <col style={{ width: "60%" }} />{" "}
              
              <tbody className="">
                <tr>
                  <td className="p-2 font-semibold align-top">
                    Applying for your first job
                  </td>
                  <td className="p-2 align-top">{dummyUserData.experience}</td>
                </tr>
              </tbody>
            </table> 
          */}
        </div>
        <div className="block border border-red-400 rounded-md p-5 m-3  ">
          <div className="flex items-center">
            <IoMdConstruct className="h-12 w-12 mr-4 text-orange-600" />
            <span className="text-2xl font-sans">Skills</span>
          </div>

          <table className="text-gray-800">
            <col style={{ width: "15%" }} /> {/* Set width of first column */}
            <col style={{ width: "60%" }} /> {/* Set width of second column */}
            <tbody className="">
              <tr>
                <td className="p-2 font-semibold align-top">Spoken Language</td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Spoken Language"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">General</td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="General"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Technical</td>
                <td className="p-2 align-top">
                  <input
                    type="text"
                    placeholder="Technical"
                    className="p-1 px-2 w-5/6 border border-red-500 rounded-md"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*<div className="block border border-red-400 rounded-md p-5 m-3">
          Cover letter
  </div>*/}
        <div className="flex justify-between">
          <button className="border border-red-500 bg-white-500 text-gray-500 hover:bg-red-500 hover:text-white font-semibold py-2 px-8 rounded-md m-3">
            Cancel
          </button>
          <button className="border border-red-500 bg-white-500 text-gray-500 hover:bg-red-500 hover:text-white font-semibold py-2 px-8 rounded-md m-3">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfilePage;
