import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import CountriesRecords from "../assets/data/data.json";

const CountryPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryId}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
      })
      .catch((error) => {
        console.log("Error fetching country:", error);
      });
  }, [countryId]);

  function getCountryNameByCode(cca3) {
    const country = CountriesRecords.find((c) => c.cca3 === cca3);
    return country ? country.name.common : "Country not found";
  }

  return (
    <div className="min-h-screen very-light-gray-light dark:bg-very-dark-blue-dark dark:text-white">
      {/* <div className="bg-red-500"> */}
      <div className="flex flex-col px-4 py-10">
        <div className="w-fit shadow-lg border border-dark-gray-light/20  bg-white dark:bg-dark-blue-dark dark:text-white">
          <button
            className="flex items-center gap-5 text-sm px-7 py-2"
            onClick={handleClick}
          >
            <BsArrowLeft />
            Back
          </button>
        </div>

        <div className="space-y-7 py-10 font-semibold text-sm">
          <div>
            {country && (
              <div className="shadow-lg">
                <img
                  className="w-full rounded-t-md"
                  src={country.flags.png}
                  alt="Country Flag"
                />
              </div>
            )}
          </div>
          <div>
            {country && (
              <h1 className="font-bold text-xl">{country.name.common}</h1>
            )}
          </div>
          <div>
            {country && (
              <div className="space-y-2">
                <h3>
                  Native Name:{" "}
                  <span className="font-thin">
                    {Object.values(country.name.nativeName)
                      .map((lang) => lang.common)
                      .join(", ")}
                  </span>
                </h3>
                <h3>
                  Population:{" "}
                  <span className="font-thin">
                    {country.population.toLocaleString()}
                  </span>
                </h3>
                <h3>
                  Region: <span className="font-thin">{country.region}</span>
                </h3>
                <h3>
                  Sub Region:{" "}
                  <span className="font-thin">{country.subregion}</span>
                </h3>
                <h3>
                  Capital:{" "}
                  <span className="font-thin">
                    {country.capital.join(", ")}
                  </span>
                </h3>
              </div>
            )}
          </div>
          <div>
            {country && (
              <div className="space-y-2">
                <h3>
                  Top Level Domain:{" "}
                  <span className="font-thin">{country.tld.join(", ")}</span>
                </h3>
                <h3>
                  Currencies:{" "}
                  <span className="font-thin">
                    {Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </span>
                </h3>
                <h3>
                  Languages:{" "}
                  <span className="font-thin">
                    {Object.values(country.languages).join(", ")}
                  </span>
                </h3>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <h2 className="text-lg">Border Countries:</h2>
            <div class="grid-cols-3 grid gap-3">
              {country?.borders?.length > 0 ? (
                country.borders.map((border, index) => (
                  <Link to={`/country/${getCountryNameByCode(border)}`}>
                    <div
                      key={index}
                      className="bg-white shadow-lg border border-dark-gray-light/20 text-center basis-1/3 dark:bg-dark-blue-dark dark:text-white"
                    >
                      <p className="w-full p-2">
                        {getCountryNameByCode(border)}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="font-thin col-span-3">No Border Countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
