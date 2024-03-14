
import { useState } from 'react';
import './Country.css';

import CountryDetail from "../CountryDetail/CountryDetail";


const Country = ({country, handelVisitedCountries}) => {


    const {name, capital, flags, population, area,cca3} = country;
    const [visited, setVisited] = useState(false);
    
    const handelVisited = () =>{
        setVisited(!visited);
    }


    // console.log(handelVisitedCountries);
    const passWithParams = () =>{
        handelVisitedCountries(country)
    }


    return (
        <div className={`Country ${visited ? 'visited' :'Non-visited'}`}>
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>Capita:{capital}</p>
            <p>Area: {area}</p>
            <p><small>Code:{cca3}</small></p>


            <hr />
            <div className=" flex justify-between gap-2 text-white">

                <div className="">
                <button onClick={passWithParams}>Mark as visited</button>
                </div>
            
                <div className="">
                <button onClick={handelVisited}>{visited ? 'Visited' : 'Going'} </button>
            {visited ? 'I Have Visited this Country' : 'I Want to visite'}


                </div>
            
            </div>
            
            <hr />

            <CountryDetail>
                country = {country}
                handelVisitedCountries = {handelVisitedCountries}
            </CountryDetail>

        </div>
    );
};

export default Country;