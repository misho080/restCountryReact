import { InputType } from "../../types/common"


const Input = ({ onChange, src }: InputType) => {
  return (
    <div className="searchContainer">
      <img className="inputSearchIcon" src={src} alt="searchIcon" />
      <input onChange={onChange} type="text" placeholder="Search for a country…" />
    </div>
  )
}

export default Input