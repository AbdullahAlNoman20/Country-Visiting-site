import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";


const Country = ({ country, handelVisitedCountries }) => {
  // console.log(country)
  // Destructure the country
  const { name, capital, flags, population, area, cca3 } = country;



  const [visited, setVisited] = useState(false);

  const handelVisited = () => {
    setVisited(!visited);
  };

  // console.log(handelVisitedCountries);
//   const passWithParams = () => handelVisitedCountries(country);

  return (
    <div className={`Country ${visited ? "visited" : "Non-visited"}`}>
      <h3 className="font-bold mb-5">Name : {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Capita:{capital}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code:{cca3}</small>
      </p>

      <hr className="" />
      <div className=" flex gap-2 text-white py-5">
        <div className="">
          <button
            className="btn btn-xs btn-warning pb-5"
            onClick={() => handelVisitedCountries(country)}
          >
            Mark as visited
          </button>
        </div>

        <div className="">
          <button
            className="btn btn-xs btn-warning mr-5 pb-5"
            onClick={handelVisited}
          >
            {visited ? "Visited" : "Going"}
          </button>

          {visited ? "I Have Visited this Country" : "I Want to visit"}
        </div>
      </div>

      <hr className="" />

      <CountryDetail>
        country = {country}
        handelVisitedCountries = {handelVisitedCountries}
      </CountryDetail>
    </div>
  );
};

export default Country;
