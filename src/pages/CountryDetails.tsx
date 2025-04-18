import { Link, useLocation } from "react-router-dom"
import Header from "../components/header/Header"
import BackIcon from "../assets/call-made.svg"
import darkModeIcon from "../assets/darkModeIcon.svg"
import liteModeIcon from "../assets/9025960_sun_icon.svg"
import { useState } from "react"

function CountryDetails() {

  const location = useLocation()
  const data = location.state
  const [darkMode,setDarkMode]:any = useState("liteMode")

  const HandleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode? "liteMode" : "darkMode"}>
      <Header imageSrc={darkMode? liteModeIcon : darkModeIcon} darkModeOnClick={HandleDarkMode} />
      <Link to="/"><button className="backButton"> <img className="BackIcon" src={BackIcon} alt="BackIcon" /><p>Back</p></button></Link>
      
      {
        data && (
          <>
            <div className="detaleContainer">
              <div>
                <img className="mainIng" src={data.flags.svg} alt="detailsMainIng" />
              </div>

              <div className="detailInfo">
                <h1>{data.name.common}</h1>
                <div className="spansContainer">
                  <span><p>Native Name:</p>{data.name.common}</span>
                  <span><p>Population:</p>{data.population}</span>
                  <span><p>Region:</p>{data.region}</span>
                  <span><p>Sub-Rea:</p>{data.subregion}</span>
                  <span><p>Capital:</p>{data.capital}</span>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default CountryDetails