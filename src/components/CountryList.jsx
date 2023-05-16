import React from "react";
import CountriesRecords from "../assets/data/data.json";
import CountryCard from "./CountryCard";

const CountryList = () => {
  return (
    <div className="flex flex-col gap-10">
      {CountriesRecords.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
