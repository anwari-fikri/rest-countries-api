import React from "react";
import CountriesRecords from "../assets/data/data.json";
import CountryCard from "./CountryCard";

const CountryList = ({ search }) => {
  const filteredCountries = CountriesRecords.filter((country) => {
    const countryName = country.name.toLowerCase();
    const searchTerm = search.toLowerCase();
    return countryName.includes(searchTerm);
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
