import React from 'react'
import {useParams, Link} from 'react-router-dom'

function CountryInfoPage({countries}) {
    const {countryID} = useParams()

    const selectedCountry = countries.find(country => country.alpha2Code === countryID)

    if(!selectedCountry) {
        return <h1>Country not found!</h1>
    }

    return (
        <div className="container">
            <Link 
                className="btn btn-back"
                to="/"
            >← Back</Link>
        </div>
    )
} 

export default CountryInfoPage