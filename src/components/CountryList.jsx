import React from "react";
import CountriesRecords from "../assets/data/data.json";
import CountryCard from "./CountryCard";

const CountryList = ({ search, selectedRegion }) => {
  const filteredCountries = CountriesRecords.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    const searchTerm = search.toLowerCase();
    const regionFilter =
      selectedRegion === "Filter by Region" ||
      selectedRegion === country.region;

    return countryName.includes(searchTerm) && regionFilter;
  });

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
      {filteredCountries.map((country, index) => (
        <div>
          <CountryCard key={index} country={country} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
