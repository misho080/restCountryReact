import { Link } from "react-router-dom"

const FilterByRegion = () => {
    return (
        <div className="filterContainer">
            <Link className="filterLink" to="/africa"><p className="regionName">Africa</p></Link>
            <Link className="filterLink" to={"/america"}><p className="regionName">America</p></Link>
            <Link className="filterLink" to={"/asia"}><p className="regionName">Asia</p></Link>
            <Link className="filterLink" to={"/europe"}><p className="regionName">Europe</p></Link>
            <Link className="filterLink" to={"/oceania"}><p className="regionName">Oceania</p></Link>
        </div>
    )
}

export default FilterByRegion