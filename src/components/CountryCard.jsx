import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="bg-white shadow-lg rounded-md">
      <img
        className="w-full rounded-t-md"
        src={country.flags.png}
        alt="Country Flag"
      />
      <div className="p-6">
        <h2 className="font-bold text-lg">{country.name}</h2>
        <div className="font-semibold text-sm">
          <h3>
            Population:{" "}
            <span className="font-light">
              {country.population.toLocaleString()}
            </span>
          </h3>
          <h3>
            Region: <span className="font-light">{country.region}</span>
          </h3>
          <h3>
            Capital: <span className="font-light">{country.capital}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
