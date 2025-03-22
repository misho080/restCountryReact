import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='headerContainer'>
        <Link to={"/"}><h1 className="headerTitle">Where in the world?</h1></Link>
         <span>Dark Mode</span>
    </div>
  )
}

export default Header