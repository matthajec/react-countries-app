import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="container container-flex">
                <Link to="/">
                    <h1>Where in the world?</h1>
                </Link>
                <h1>Light Mode</h1>
            </div>
        </header>
    )
}

export default Header