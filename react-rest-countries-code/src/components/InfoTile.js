import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

function InfoTile({ country }) {
    return (
        <LazyLoad >

            <Link
                to={`/${country.alpha3Code}`}
                className="tile"
            >
                <img
                    className="tile-flag"
                    src={country.flag}
                    alt={`flag of ${country.name}`}
                />
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
        </LazyLoad>

    );
}

export default React.memo(InfoTile); //this component is memoized because otherwise it will rerender on every input