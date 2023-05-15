import React from "react";
import { GrSearch } from "react-icons/gr";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-4 w-full shadow-md p-4 text-sm text-dark-gray-light">
      <GrSearch />
      <input
        className="w-full h-full focus:outline-none"
        placeholder={"Search for a country..."}
        name="Search"
      />
    </div>
  );
};

export default SearchBar;
