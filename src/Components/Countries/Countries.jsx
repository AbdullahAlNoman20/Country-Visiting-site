import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const[countries, setCountries] = useState([]);

    const[visitedCountries, setVisitedCountries] = useState([]);


    useEffect(() =>{


        fetch('https://restcountries.com/v3.1/all')

        .then( res => res.json())
        .then(data => setCountries(data));

        

    },[])


    const handelVisitedCountries = country =>{

        console.log('Visited Countries');
        // console.log(country);

        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }


    return (

        <div className="">
             <h3>Total Countries: {countries.length}</h3>

        <div className="">
            <h3>Visited Country: {visitedCountries.length} </h3>
            <ul>
                {
                visitedCountries.map(country => <p 
                    key={country.cca3}>Visited Country Name: <b>{country.name.common}</b>
                    </p>)
                }
            </ul>
        </div>
        
        <div className="country-container">
           
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