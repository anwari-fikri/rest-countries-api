import React from "react";
import CountryList from "./components/CountryList";
import FilterByRegion from "./components/FilterByRegion";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = React.useState("");
  console.log(search);

  return (
    // <div classname="very-light-gray-light">
    <div className="bg-red-500">
      <Header />
      <div className="flex flex-col gap-10 px-4 py-5">
        <SearchBar setSearch={setSearch} />
        <FilterByRegion />
        <div className="px-10">
          <CountryList search={search} />
        </div>
      </div>
    </div>
  );
}

export default App;
