import { Link } from "react-router-dom"

const Header = ({onClick, darkModeOnClick}:any) => {
  return (
    <div  className='headerContainer'>
        <Link  to={"/"}><h1  onClick={onClick}  className="headerTitle">Where in the world?</h1></Link>
         <div onClick={darkModeOnClick}>
         <span>Dark Mode</span>
         </div>
    </div>
  )
}

export default Header