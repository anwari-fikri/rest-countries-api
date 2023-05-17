import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <div className="flex items-center gap-4 w-full rounded-md shadow-md p-4 text-sm text-dark-gray-light bg-white dark:bg-dark-blue-dark dark:text-white">
      <FaSearch className="dark:text-white" />
      <input
        className="dark:bg-dark-blue-dark dark:text-white w-full h-full focus:outline-none"
        placeholder={"Search for a country..."}
        name="Search"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
