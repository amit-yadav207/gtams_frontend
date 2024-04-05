import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing React Icons
import axios from "axios";
import UserForm from "../../components/UserForm";
import EditForm from "../../components/EditForm";

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
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [showCreateForm, setShowCreateForm] = useState(false); // State to control modal visibility
  const [showEditForm, setShowEditForm] = useState(false); // State to control modal visibility
  const [selectedUser, setSelectedUser] = useState(null); // State to store the selected user data for editing

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
    { id: 5, fullName: "user2", email: "user2@example.com", role: "USER" },
    { id: 6, fullName: "user3", email: "user3@example.com", role: "USER" },
    { id: 7, fullName: "user4", email: "user4@example.com", role: "USER" },
    {
      id: 8,
      fullName: "inspector2",
      email: "inspector2@example.com",
      role: "INS",
    },
    {
      id: 9,
      fullName: "inspector3",
      email: "inspector3@example.com",
      role: "INS",
    },
    {
      id: 10,
      fullName: "data_scientist2",
      email: "data_scientist2@example.com",
      role: "DS",
    },
    {
      id: 11,
      fullName: "data_scientist3",
      email: "data_scientist3@example.com",
      role: "DS",
    },
    {
      id: 12,
      fullName: "content_manager2",
      email: "content_manager2@example.com",
      role: "CM",
    },
    {
      id: 13,
      fullName: "content_manager3",
      email: "content_manager3@example.com",
      role: "CM",
    },
    { id: 16, fullName: "user5", email: "user5@example.com", role: "USER" },
    { id: 17, fullName: "user6", email: "user6@example.com", role: "USER" },
    {
      id: 18,
      fullName: "inspector4",
      email: "inspector4@example.com",
      role: "INS",
    },
    {
      id: 19,
      fullName: "data_scientist4",
      email: "data_scientist4@example.com",
      role: "DS",
    },
    {
      id: 20,
      fullName: "content_manager4",
      email: "content_manager4@example.com",
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
      // await axios.post("/api/users", formData);
      // fetchUsers(); // Refresh the user list after creating a new user
      setUsers([...users, formData]);
      setFormData({
        fullName: "",
        email: "",
        password: "",
        role: "user",
      });
      setShowCreateForm(false);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEditForm(true);
  };

  // Handle delete button click
  const handleDelete = async (userId) => {
    try {
      // Send delete request to backend
      // await axios.delete(`/api/users/${userId}`);
      // Remove the deleted user from the dummyUsers array
      const updatedUsers = users.filter((user) => user.id !== userId);
      // Update the state with the new dummyUsers array
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    if (e.target.value === "USER")
      setFormData({ ...formData, department: "", role: "USER" });
    else setFormData({ ...formData, role: e.target.value });
  };

  // Filter users based on selected role and search term
  const filteredUsers = users.filter((user) => {
    if (filterRole !== "ALL" && user.role !== filterRole) return false;
    if (
      searchTerm &&
      !user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    return true;
  });

  // Fetch users on component mount
  useEffect(() => {
    // fetchUsers();
    setUsers(dummyUsers);
  }, []);

  return (
    <div className="min-h-screen lg:m-5 m-1 p-3">
      <h1 className="text-xl md:text-2xl font-semibold mb-4">
        User Management
      </h1>

      {/* User Creation Form */}
      <div className="mb-8">
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create User
        </button>
        {/**form for creating user */}

        {showCreateForm && (
          <UserForm
            formData={formData}
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowCreateForm(false);
            }}
            departmentOptions={departmentOptions}
          />
        )}
      </div>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter dropdown */}
      <div className="mb-4">
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

      {/* User List */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">User List</h2>
        <div className="overflow-x-auto overflow-y-auto  max-h-96">
          <table className="w-full border-collapse border border-gray-300 overflow-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-2 py-2 w-1/20">
                  Sr.No.
                </th>
                <th className="border border-gray-300 px-4 py-2 w-2/5">
                  Full Name
                </th>
                <th className="border border-gray-300 px-4 py-2 w-2/5">
                  Email
                </th>
                <th className="border border-gray-300 px-3 py-2 w-1/20">
                  Role
                </th>
                <th className="border border-gray-300 px-3 py-2 w-1/20">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className="hover:bg-slate-500 hover:text-white"
                >
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    {index + 1}
                  </td>
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
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 hover:text-red-600 ml-2"
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
      {/* Edit Form Modal */}
      {showEditForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Edit User</h2>
            <EditForm
              initialFormData={selectedUser}
              onSubmit={(formData) => {
                // Handle submit logic for editing user
                console.log("Edited user data:", formData);
                const restUsers = users.filter((user) => user != selectedUser);
                setUsers([...restUsers, formData]);
                setFormData({
                  fullName: "",
                  email: "",
                  password: "",
                  role: "user",
                });
                // Close the edit form modal
                setShowEditForm(false);
              }}
              onCancel={() => setShowEditForm(false)}
              departmentOptions={departmentOptions}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
