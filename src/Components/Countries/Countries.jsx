import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    // Countries gula rakhar Jonno State Declare kortaci.
    const[countries, setCountries] = useState([]);

    useEffect(() =>{

        fetch('https://restcountries.com/v3.1/all')

        .then( res => res.json())
        // .then(data => console.log(data));
        .then(data => setCountries(data));

    },[])

    // Je sob country visite korechi segulo rakhte
    const[visitedCountries, setVisitedCountries] = useState([]);

    const handelVisitedCountries = country =>{

        console.log('Visited Countries');
        // console.log(country);

        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    } 


    return (

        <div className="">
             
        <div className=" bg-gray-50 rounded-lg m-5 p-5">
            <h3 className=" text-3xl font-bold m-5 p-5">Total Countries: {countries.length}</h3>
            <hr />
            <h3 className="text-2xl font-bold my-5">Visited Country: {visitedCountries.length} </h3>
            <ul>
                {
                visitedCountries.map(country => <p 
                    key={country.cca3}>Visited Country Name: <b>{country.name.common}</b>
                    </p>)
                }
            </ul>
        </div>
        
        <div className="country-container  lg:grid-cols-3">
           
            {

                countries.map(country => 
                <Country 
                    key={country.cca3} 
                    handelVisitedCountries = {handelVisitedCountries}
                    country={country}>

                    </Country>)


            }
        </div>

        </div>
    );
};

export default Countries;