import React from "react";
import CountriesRecords from "../assets/data/data.json";
import CountryCard from "./CountryCard";

const CountryList = ({ search, selectedRegion }) => {
  const filteredCountries = CountriesRecords.filter((country) => {
    const countryName = country.name.toLowerCase();
    const searchTerm = search.toLowerCase();
    const regionFilter =
      selectedRegion === "Filter by Region" ||
      selectedRegion === country.region;

    return countryName.includes(searchTerm) && regionFilter;
  });

  return (
    <div className="flex flex-col gap-10">
      {filteredCountries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
