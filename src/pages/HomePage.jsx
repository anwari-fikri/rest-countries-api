import React from "react";
import CountryList from "../components/CountryList";
import FilterByRegion from "../components/FilterByRegion";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [search, setSearch] = React.useState("");
  const [selectedRegion, setSelectedRegion] =
    React.useState("Filter by Region");
  return (
    <div className="min-h-screen very-light-gray-light dark:bg-very-dark-blue-dark">
      {/* // <div className="bg-red-500"> */}
      <div className="flex flex-col gap-10 px-4 py-5 md:px-14">
        <SearchBar setSearch={setSearch} />
        <FilterByRegion
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
        <div className="px-10 md:px-0">
          <CountryList search={search} selectedRegion={selectedRegion} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
