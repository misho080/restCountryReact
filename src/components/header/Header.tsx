import { Link } from "react-router-dom"

const Header = ({ onClick, darkModeOnClick, imageSrc }: any) => {
  return (
    <div className='headerContainer'>
      <Link to={"/"}><button className="headerButton"><h1  onClick={onClick}  className="headerTitle">Where in the world?</h1></button></Link>
      <div className="darkModeContainer" onClick={darkModeOnClick}>
        <img className="modeIcons" src={imageSrc} alt="imageSrc" />
        <span>Dark Mode</span>
      </div>
    </div>
  )
}

export default Header