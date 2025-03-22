import { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import axios from 'axios'
import Input from '../components/search/Input'
import Button from '../components/filterCountries/Button'
import FilterByRegion from '../components/filterCountries/FilterByRegion'
import { countryTypes } from '../types/common'

const MainContent = () => {
    const [countryData, setCountryData] = useState<countryTypes[]>([])
    const [inputValue, setInputValue] = useState("")
    const [showFilter, setShowFilter] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const responce = await axios.get("https://restcountries.com/v3.1/all")
            setCountryData(responce.data)
        }
        getData()
    }, [])

    const fillterData  = countryData.filter((country) => {
        return inputValue == "" || country.name.common.toLowerCase().includes(inputValue.toLowerCase());
    })

    return (
        <div>
            <Header />
            <Input onChange={(e) => setInputValue(e.target.value)}/>
            <Button onClick={() => setShowFilter(true)}/>
            {showFilter && <FilterByRegion/>}
            <div className='cardsContainer'>
                {fillterData.map((country) => {
                    return (
                        <div className='cards'>
                            <img src={country.flags.svg} alt="flagsImg" />
                            <h1>{country.name.common}</h1>
                            <div className='moreInfoContainer'>
                                <div className='moreInfo'><p>Population:</p> <span>{country.population}</span></div>
                                <div className='moreInfo'><p>Region:</p> <span>{country.region}</span></div>
                                <div className='moreInfo'><p>Capital:</p> <span>{country.capital}</span></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MainContent