import { InputType } from "../../types/common"

const Input = ({onChange}:InputType) => {
  return (
    <div className="searchContainer">
        <input onChange={onChange} type="text" placeholder="Search for a country…"/>
    </div>
  )
}

export default Input