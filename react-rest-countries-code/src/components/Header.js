import React from 'react'
import {Link} from 'react-router-dom'

function Header({isDark, toggleTheme}) {
    return (
        <header className={isDark ? 'dark' : ''}>
            <div className='container container-flex'>
                <Link to="/">
                    <h1>Where in the world?</h1>
                </Link>
                <h3 onClick={toggleTheme}>{isDark ? '🌙 Dark Mode' : '🌞 Light Mode'}</h3>
            </div>
        </header>
    )
}

export default Header