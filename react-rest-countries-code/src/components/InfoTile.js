import React from 'react'
import {Link} from 'react-router-dom'

function InfoTile({country}) {

    if(country) {
        return (
            <Link 
                to={`/${country.alpha2Code}`}
                className="tile"
            >
                <img 
                    className="tile-flag"
                    src={country.flag}
                    alt={`flag of ${country.name}`}
                ></img>
                <div className="tile-info">
                    <h2 className="tile-info_name">{country.name}</h2>

                    <p className="tile-info_population">
                        <b>Population: </b>
                        {country.population.toLocaleString()}
                    </p>

                    <p className="tile-info_region">
                        <b>Region: </b>
                        {country.region}
                    </p>
                    <p className="tile-info_capital">
                        <b>Capital: </b>
                        {country.capital}
                    </p>
                </div>
            </Link>
        )
    } else {
        return (<h1>Loading</h1>)
    }
}

export default React.memo(InfoTile) //React.memo is used so that every time the inputs are changed all of the tiles are not unnessarily reloaded