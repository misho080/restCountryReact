import { useEffect, useState } from "react"
import Button from "../components/filterCountries/Button"
import Header from "../components/header/Header"
import Input from "../components/search/Input"
import axios from "axios"
import FilterByRegion from "../components/filterCountries/FilterByRegion"
import { countryTypes } from "../types/common"
import { useNavigate } from "react-router-dom"
import darkModeSearchIcon from "../assets/search.svg"
import liteModeSearckIcon from "../assets/Shape.svg"
import darkModeIcon from "../assets/darkModeIcon.svg"
import liteModeIcon from "../assets/9025960_sun_icon.svg"


const America = () => {
    const [countryData, setCountryData] = useState<countryTypes[]>([])
    const [inputValue, setInputValue] = useState("")
    const [showFilter, setShowFilter] = useState(false)
    const [darkMode, setdartMode]: any = useState("liteMode")
    const location = useNavigate()

    useEffect(() => {
        const getCountryData = async () => {
            const responce = await axios.get("https://restcountries.com/v3.1/all")
            setCountryData(responce.data)
        }
        getCountryData()
    }, [])

    const handleClickCountryDetails = (country: countryTypes) => {
        return location("/CountryDedails", {
            state: country
        })
    }
    const handleDarkMode = () => {
        setdartMode(!darkMode)
    }

    const fillterCountryData = countryData.filter((country) => {
        return inputValue == "" || country.name.common.toLowerCase().includes(inputValue.toLowerCase())
    })

    return (
        <div className={darkMode ? "liteMode" : "darkMode"}>
            <Header imageSrc={darkMode ? liteModeIcon : darkModeIcon} darkModeOnClick={handleDarkMode} />
            <Input src={darkMode ? liteModeSearckIcon : darkModeSearchIcon} onChange={(e) => setInputValue(e.target.value)} />
            <Button onClick={() => setShowFilter(true)} />
            {showFilter && <FilterByRegion />}
            <div className='cardsContainer'>
                {
                    fillterCountryData
                        .filter((country) => country.region === "Americas")
                        .map((country) => {
                            return (
                                <div className='cards' onClick={() => handleClickCountryDetails(country)}>
                                    <img src={country.flags.svg} alt="flagsImg" />
                                    <h1>{country.name.common}</h1>
                                    <div className='moreInfoContainer'>
                                        <div className='moreInfo'><p>Population:</p> <span>{country.population}</span></div>
                                        <div className='moreInfo'><p>Region:</p> <span>{country.region}</span></div>
                                        <div className='moreInfo'><p>Capital:</p> <span>{country.capital}</span></div>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>

        </div>
    )
}

export default America