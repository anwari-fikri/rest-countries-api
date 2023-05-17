import React from "react";
import { FaRegMoon } from "react-icons/fa";

const Header = ({ handleThemeSwitch }) => {
  return (
    <div className="flex justify-between items-center px-4 h-20 bg-white dark:bg-dark-blue-dark dark:text-white shadow-md">
      <h1 className="font-bold">Where in the world?</h1>
      <button onClick={handleThemeSwitch} className="font-semibold">
        <span className="flex items-center gap-2">
          <FaRegMoon />
          <p>Dark Mode</p>
        </span>
      </button>
    </div>
  );
};

export default Header;
