import React, { useEffect, useState, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Search from './components/Search'
import CountryInfoPage from './components/CountryInfoPage'

import './styles/main.css'

const InfoTile = React.lazy(() => import('./components/InfoTile'));

function App() {
  const [countries, setCountries] = useState([])
  const [countriesComponents, setCountriesComponents] = useState([])
  const [dropdownValue, setDropDownValue] = useState('none')
  const [searchValue, setSearchValue] = useState('')
  const [isDark, setIsDark] = useState(false)

  //set countries to the API response when the site is loaded
  useEffect(() => {
    //fetch the data from the API
    async function fetchData() {
      let res = await fetch('https://restcountries.eu/rest/v2/all')
      let data = await res.json()
      return data
    }
    fetchData().then(data => {
      setCountries(data)
    })

    if (localStorage.getItem('isDark') === "true") { //local storage doesn't take booleans so a string is used
      setIsDark(true)
    }

  }, []) //only call once on mount

  useEffect(() => {
    const filteredCountries = countries.filter(country => {
      if (dropdownValue === country.region || dropdownValue === "none") {
        const simplifiedName = country.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "") //normalize decomposes the string (so è would become e + `), then replace replaces the accents with an empty string, this is so the search can work without the user having to type accents

        if (simplifiedName.toLowerCase().includes(searchValue.toLowerCase())) { //makes both strings lowercase and then compares them
          return true
        }
      }
      return false
    })

    setCountriesComponents(filteredCountries.map((country, index) => (
      <Suspense key={index} fallback="">
        <InfoTile country={country} />
      </Suspense>
    ))) //countriesComponents is set to a list of components that match the query
  }, [dropdownValue, searchValue, countries]) //call the effect when the query is changed OR whenever countries is loaded


  //handles the state for the drop down
  const onDropdownSelect = ({ value }) => {
    setDropDownValue(value)
  }

  //handles the state for the search input
  const onSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  //handles theme
  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  useEffect(() => {
    if (isDark) {
      document.querySelector('body').classList.add('darkBg')
      localStorage.setItem('isDark', 'true'); //local storage doesn't take booleans so a string is used
    } else {
      document.querySelector('body').classList.remove('darkBg')
      localStorage.setItem('isDark', 'false'); //local storage doesn't take booleans so a string is used
    }
  }, [isDark])

  return (
    <>
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <Switch>
        <Route exact path="/">
          <Search
            isDark={isDark}
            dropdownValue={dropdownValue}
            searchValue={searchValue}
            onDropdownSelect={onDropdownSelect}
            onSearchInput={onSearchInput} />
          <div className={`container container-tiles ${isDark ? 'dark' : ''}`}>
            {countriesComponents}
          </div>
        </Route>
        <Route exact path="/:countryID">
          <CountryInfoPage
            isDark={isDark}
            countries={countries}
          />
        </Route>
      </Switch>
    </>
  )
}

export default App
