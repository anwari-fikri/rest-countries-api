import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { BsArrowLeft } from "react-icons/bs";

const CountryPage = () => {
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
  const buttonLabels = ["France", "Germany", "Netherlands", "BRO"];

  return (
    <div classname="very-light-gray-light">
      {/* <div className="bg-red-500"> */}
      <Header />
      <div className="flex flex-col px-4 py-10">
        <div className="w-fit shadow-lg bg-white">
          <button className="flex items-center gap-5 text-sm px-7 py-2">
            <BsArrowLeft />
            Back
          </button>
        </div>

        <div className="space-y-7 py-10 font-semibold text-sm">
          <div>
            {country ? (
              <div className="shadow-lg">
                <img
                  className="w-full rounded-t-md"
                  src={country.flags.png}
                  alt="Country Flag"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {country ? (
              <h1 className="font-bold text-xl">{country.name.common}</h1>
            ) : (
              ""
            )}
          </div>
          <div>
            {country ? (
              <div className="space-y-2">
                <h3>
                  Native Name:{" "}
                  <span className="font-thin">{country.name.common}</span>
                </h3>
                <h3>
                  Population: <span>{country.population.toLocaleString()}</span>
                </h3>
                <h3>
                  Region: <span>{country.region}</span>
                </h3>
                <h3>
                  Sub Region: <span>{country.subregion}</span>
                </h3>
                <h3>
                  Capital: <span>{country.capital.join(", ")}</span>
                </h3>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {country ? (
              <div className="space-y-2">
                <h3>
                  Top Level Domain: <span>{country.tld.join(", ")}</span>
                </h3>
                <h3>
                  Currencies:{" "}
                  <span>
                    {Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </span>
                </h3>
                <h3>
                  Languages:{" "}
                  <span>{Object.values(country.languages).join(", ")}</span>
                </h3>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="space-y-2">
            {country ? (
              <>
                <h2 className="text-lg">Border Countries:</h2>
                <div class="grid-cols-3 grid gap-3">
                  {/* Iterate over the buttonLabels array using map */}
                  {buttonLabels.map((label, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-lg border border-dark-gray-light/20 text-center basis-1/3"
                    >
                      <button className="w-full p-2">{label}</button>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
