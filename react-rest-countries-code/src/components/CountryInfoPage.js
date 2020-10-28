import React from 'react'
import {useParams, Link} from 'react-router-dom'

function CountryInfoPage({countries}) {
    const {countryID} = useParams()

    function findCountry(countryID) { //takes an alpha3Code and returns the corresponding country object
        return countries.find(country => country.alpha3Code === countryID)
    }

    const country = findCountry(countryID) //sets the country the page content is based on

    if(!country) { //if no country is found for a url this is the fallback page
        return <h1>Country not found!</h1>
    }

    let currenciesStr = ''
    let languagesStr = ''

    country.currencies.forEach(currency => {
        if(currenciesStr.length === 0) {
            currenciesStr = currency.name
        } else {
            currenciesStr = `${currenciesStr}, ${currency.name}`
        }
    })

    country.languages.forEach(language => {
        if(languagesStr.length === 0) {
            languagesStr = language.name
        } else {
            languagesStr = `${languagesStr}, ${language.name}`
        }
    })

    return (
        <div className="container">
            <Link 
                className="btn btn-back"
                to="/"
            >← Back</Link>
            <div className="container-details">
                <img 
                    className="flag"
                    src={country.flag}
                    alt={`flag of ${country.name}`}
                />
                <h1 className="details-wide">{country.name}</h1>
                <div className="details-specifics">
                    <p>
                        <b>Native Name: </b>
                        {country.nativeName}
                    </p>
                    <p>
                        <b>Population: </b>
                        {country.population}
                    </p>
                    <p>
                        <b>Region: </b>
                        {country.region}
                    </p>
                    <p>
                        <b>Sub Region: </b>
                        {country.subregion}
                    </p>
                    <p>
                        <b>Capital: </b>
                        {country.capital}
                    </p>
                    <p>
                        <b>Native Name: </b>
                        {country.nativeName}
                    </p>
                </div>
                <div className="details-specifics">
                    <p>
                        <b>Top Level Domain: </b>
                        {country.topLevelDomain}
                    </p>
                    <p>
                        <b>Currencies: </b>
                        {currenciesStr}
                    </p>
                    <p>
                        <b>Languages: </b>
                        {languagesStr}
                    </p>
                </div>

                <div className="details-wide">
                    <b>Border Countries: </b>
                    {country.borders.map(id => {
                        const borderCountry = findCountry(id)
                        console.log(borderCountry.name)
                        return (
                            <button className="details-bordered btn">
                                <Link 
                                    key={id} 
                                    to={`/${borderCountry.alpha3Code}`} 
                                >
                                    {borderCountry.name}
                                </Link>
                            </button>
                        )
                    })}
                </div>
            </div>

        </div>
    )
} 

export default CountryInfoPage