import React from "react";
import { GrSearch } from "react-icons/gr";

const SearchBar = ({ search, setSearch }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <div className="flex items-center gap-4 w-full rounded-md shadow-md p-4 text-sm text-dark-gray-light bg-white">
      <GrSearch />
      <input
        className="w-full h-full focus:outline-none"
        placeholder={"Search for a country..."}
        name="Search"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
