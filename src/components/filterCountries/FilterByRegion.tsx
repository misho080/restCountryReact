import { Link } from "react-router-dom"

const FilterByRegion = () => {
    return (
        <div className="filterContainer">
            <Link to="/africa"><p className="regionName">Africa</p></Link>
            <Link to={"/america"}><p className="regionName">America</p></Link>
            <Link to={"/asia"}><p className="regionName">Asia</p></Link>
            <Link to={"/europe"}><p className="regionName">Europe</p></Link>
            <Link to={"/oceania"}><p className="regionName">Oceania</p></Link>
        </div>
    )
}

export default FilterByRegion