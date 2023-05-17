import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <div className="bg-white shadow-lg rounded-md dark:bg-dark-blue-dark dark:text-white">
      <Link to={`/country/${country.name.common}`}>
        <img
          className="w-full rounded-t-md md:h-56 "
          src={country.flags.png}
          alt="Country Flag"
        />
        <div className="p-6">
          <h2 className="font-bold text-lg pb-3">{country.name.common}</h2>
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
      </Link>
    </div>
  );
};

export default CountryCard;
