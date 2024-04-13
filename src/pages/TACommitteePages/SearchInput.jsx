import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full md:w-4/5 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search by ID, Instructor, Title, Course ID, Department..."
        className="w-full sm:w-4/5 px-4 py-2 pl-10 rounded border border-gray-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        autoFocus
      />
    </div>
  );
};

export default SearchInput;
