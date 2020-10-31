import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css' 

function Search({dropdownValue, searchValue, onDropdownSelect, onSearchInput, isDark}) {
    //each object in this array represents a drop down option
    const dropdownOptions = [
        { value: 'none', label: 'Filter by Region'},
        { value: 'Africa', label: 'Africa' },
        { value: 'Americas', label: 'Americas' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Oceania', label: 'Oceania' },
    ]

    return (
        <div className={`container container-flex container-search ${isDark ? 'dark' : ''}`}>
            <label 
                className="search-icon"
                htmlFor="search"
            ><span role="img" aria-label="search">🔎</span></label>
            <input
                type="text"
                name="search"
                className="search-box"
                value={searchValue}
                onChange={onSearchInput}
                placeholder="Search for a country..."
            />
            <Dropdown 
                menuClassName="dropdown-menu"
                controlClassName="dropdown-control"
                options={dropdownOptions}
                value={dropdownValue}
                onChange={onDropdownSelect}
                arrowClosed={<span className="dropdown-arrow">∧</span>}
                arrowOpen={<span className="dropdown-arrow">∨</span>}
            ></Dropdown>
        </div>
    )
}

export default Search