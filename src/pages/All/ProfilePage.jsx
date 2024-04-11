import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
// import { FaGraduationCap } from "react-icons/fa";
// import { RiBriefcaseLine } from "react-icons/ri";
// import { IoMdConstruct } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getUserData } from "../../Redux/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleEditClick = () => {
    navigate("/update-profile");
  };
  const getUser = async () => {
    let res = dispatch(getUserData());

    await toast.promise(res, {
      loading: "Fetching profile...",
      success: (data) => {
        // console.log('data hai',data.payload);
        return data?.payload?.message;
      },
      error: (data) => {
        // console.log('data', data?.response?.data.message)
        return data?.response?.data.message;
      },
    });

    res = await res;
    // console.log('data 2 hai', res.payload.user);
    setUser(res.payload.user);
  };

  useEffect(() => {
    getUser();
  }, [setUser]);

  return (
    <div
      className=" sm:p-1 h-full w-full lg:min-h-screen "
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
            {user.fullName}
          </div>
        </div>
        {/* <button
          className="border border-red-500 bg-white-500 text-gray-500 hover:bg-red-500 hover:text-white font-semibold py-2 px-8 rounded-md m-3"
          onClick={handleEditClick}
        >
          Edit
        </button> */}
        {/*<div className="block border border-red-400 rounded-md p-5 m-3">Resume</div>*/}
        <div className="block border border-red-400 rounded-md p-5 m-3  ">
          <div className="flex items-center">
            <CgProfile className="h-12 w-12 mr-4 text-orange-600" />
            <span className="text-2xl font-sans">Contact Details</span>
          </div>

          <table className="text-gray-800 ">
            <colgroup>
              <col style={{ width: "15%" }} /> {/* Set width of first column */}
              <col style={{ width: "60%" }} />{" "}
              {/* Set width of second column */}
            </colgroup>
            <tbody className="">
              <tr>
                <td className="p-2 font-semibold align-top ">Name</td>
                <td className="p-2 align-top">{user?.fullName}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Email</td>
                <td className="p-2 align-top">{user?.email}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Phone</td>
                <td className="p-2 align-top">{user?.phone}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Role</td>
                <td className="p-2 align-top">
                  {user?.role === "USER" && "TA/User"}
                  {user?.role === "INS" && "Instructor"}
                  {user?.role === "ADMIN" && "Admin"}
                  {user?.role === "TACM" && "TA Committee member"}
                  {user?.role === "DS" && "Dept Staff"}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Address</td>
                <td className="p-2 align-top">{user?.address}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <div className="block border border-red-400 rounded-md p-5 m-3  ">
          <div className="flex items-center">
            <FaGraduationCap className="h-12 w-12 mr-4 text-orange-600" />
            <span className="text-2xl font-sans"> Higher Education</span>
          </div>

          <table className="text-gray-800">
            <col style={{ width: "15%" }} /> 
            <col style={{ width: "60%" }} /> 
            <tbody className="">
              <tr>
                <td className="p-2 font-semibold align-top">School</td>
                <td className="p-2 align-top">{dummyUserData.school}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Degree</td>
                <td className="p-2 align-top">{dummyUserData.degree}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Degree Status</td>
                <td className="p-2 align-top">{dummyUserData.dstatus}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">
                  Major/Area of Study
                </td>
                <td className="p-2 align-top">{dummyUserData.major}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="block border border-red-400 rounded-md p-5 m-3  ">
          <div className="flex items-center">
            <RiBriefcaseLine className="h-12 w-12 mr-4 text-orange-600" />
            <span className="text-2xl font-sans">Previous Experience</span>
          </div>
          <p className="p-2 font-semibold ">Applying for your first job</p>
          <p className="p-2 ">Yes</p>
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
        </div>
       
        <div className="block border border-red-400 rounded-md p-5 m-3  ">
          <div className="flex items-center">
            <IoMdConstruct className="h-12 w-12 mr-4 text-orange-600" />
            <span className="text-2xl font-sans">Skills</span>
          </div>

          <table className="text-gray-800">
            <col style={{ width: "15%" }} />
            <col style={{ width: "60%" }} /> 
            <tbody className="">
              <tr>
                <td className="p-2 font-semibold align-top">Spoken Language</td>
                <td className="p-2 align-top">{dummyUserData.languages}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">General</td>
                <td className="p-2 align-top">{dummyUserData.general}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold align-top">Technical</td>
                <td className="p-2 align-top">{dummyUserData.technical}</td>
              </tr>
            </tbody>
          </table>
        </div> */}

        <button
          className="border border-red-500 bg-white-500 text-gray-500 hover:bg-red-500 hover:text-white font-semibold py-2 px-8 rounded-md m-3"
          onClick={handleEditClick}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
