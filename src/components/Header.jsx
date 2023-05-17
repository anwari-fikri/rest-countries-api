import React from "react";

const Header = ({ handleThemeSwitch }) => {
  return (
    <div className="flex justify-between items-center px-4 h-20 bg-white dark:bg-dark-blue-dark dark:text-white shadow-md">
      <h1 className="font-bold">Where in the world?</h1>
      <button onClick={handleThemeSwitch} className="font-semibold">
        Dark Mode
      </button>
    </div>
  );
};

export default Header;
