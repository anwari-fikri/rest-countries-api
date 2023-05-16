import React from "react";
import CountryList from "../components/CountryList";
import FilterByRegion from "../components/FilterByRegion";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [search, setSearch] = React.useState("");
  const [selectedRegion, setSelectedRegion] =
    React.useState("Filter by Region");
  return (
    // <div classname="very-light-gray-light">
    <div className="bg-red-500">
      <Header />
      <div className="flex flex-col gap-10 px-4 py-5">
        <SearchBar setSearch={setSearch} />
        <FilterByRegion
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
        <div className="px-10">
          <CountryList search={search} selectedRegion={selectedRegion} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
