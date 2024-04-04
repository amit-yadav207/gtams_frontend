import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing React Icons
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user", // default role
  });
  const [filterRole, setFilterRole] = useState("ALL"); // Default filter role
  const [selectedRole, setSelectedRole] = useState("USER"); // Default filter role
  const [departmentError, setDepartmentError] = useState(""); // Department error message
  
  const dummyUsers = [
    { id: 1, fullName: "user1", email: "user1@example.com", role: "USER" },
    {
      id: 2,
      fullName: "inspector1",
      email: "inspector1@example.com",
      role: "INS",
    },
    {
      id: 3,
      fullName: "data_scientist1",
      email: "data_scientist1@example.com",
      role: "DS",
    },
    {
      id: 4,
      fullName: "content_manager1",
      email: "content_manager1@example.com",
      role: "CM",
    },
    // Add more dummy users with different roles as needed
  ];

  const departmentOptions = [
    { id: 1, name: "Department 1" },
    { id: 2, name: "Department 2" },
    { id: 3, name: "Department 3" },
    // Add more departments as needed
  ];

  // Function to fetch users from backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Function to handle form submission for creating new user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/users", formData);
      fetchUsers(); // Refresh the user list after creating a new user
      setFormData({
        fullName: "",
        email: "",
        password: "",
        role: "user",
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (user) => {
    // Add edit logic here
  };

  // Handle delete button click
  const handleDelete = (userId) => {
    // Add delete logic here
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    if (e.target.value === "USER")
      setFormData({ ...formData, department: "", role: "USER" });
    else setFormData({ ...formData, role: e.target.value });
  };

  // Filter users based on selected role
  const filteredUsers =
    filterRole === "ALL"
      ? users
      : users.filter((user) => user.role === filterRole);

  // Fetch users on component mount
  useEffect(() => {
    // fetchUsers();
    setUsers(dummyUsers);
  }, []);

  return (
    <div className="  min-h-screen lg:m-5 m-1 p-3">
      <h1 className="text-xl md:text-2xl font-semibold mb-4 ">
        User Management
      </h1>

      {/* User Creation Form */}
      <form onSubmit={handleSubmit} className="mb-8 ">
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-semibold"
          >
            fullName:
          </label>
          <input
            type="text"
            id="fullName"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700 font-semibold">
            Role:
          </label>
          <select
            id="role"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            value={formData.role}
            onChange={handleRoleChange}
            required
          >
            <option value="USER">User</option>
            <option value="INS">Instructor</option>
            <option value="DS">Department Staff</option>
            <option value="CM">Committee Member</option>
          </select>
        </div>

        {/* Department selection */}
        {selectedRole !== "USER" && (
          <div className="mb-4">
            <label
              htmlFor="department"
              className="block text-gray-700 font-semibold"
            >
              Department:
            </label>
            <select
              id="department"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              required
            >
              <option value="">Select Department</option>
              {departmentOptions.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
            {departmentError && (
              <p className="text-red-500 mt-2">{departmentError}</p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create User
        </button>
      </form>
      {/* User List */}
      <div>
        {/* Filter dropdown */}
        <div className="mb-4 ">
          <label
            htmlFor="filterRole"
            className="block text-gray-700 font-semibold"
          >
            Filter by Role:
          </label>
          <select
            id="filterRole"
            className="border border-gray-300 rounded-md px-4 py-2"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="ALL">All</option>
            <option value="USER">User</option>
            <option value="INS">Instructor</option>
            <option value="DS">Department Staff</option>
            <option value="CM">Committee Member</option>
          </select>
        </div>
        {/* User Table */}
        <h2 className="text-xl md:text-2xl font-semibold mb-4 ">
          User List
        </h2>
        <div className="overflow-x-auto ">
          <table className="w-full border-collapse border border-gray-300 overflow-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-2 py-2 w-1/20">
                  Sr.No.
                </th>
                <th className="border border-gray-300 px-4 py-2 w-2/5">
                  fullName
                </th>
                <th className="border border-gray-300 px-4 py-2 w-2/5">
                  Email
                </th>
                <th className="border border-gray-300 px-3 py-2 w-1/20">Role</th>
                <th className="border border-gray-300 px-3 py-2 w-1/20">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td className="border border-gray-300 px-2 py-2 text-center">{index+1}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.fullName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    {user.role}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    {/* Edit Button */}
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit />
                    </button>
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-800 ml-2"
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

export default AdminDashboard;
