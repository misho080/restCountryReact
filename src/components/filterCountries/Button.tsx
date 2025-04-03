import { ButtonType } from "../../types/common"

const Button = ({onClick}:ButtonType) => {
    return (
        <div>
            <button onClick={onClick} className="filterButton"><span className="filterButtonTitle">Filter by Region</span></button>
        </div>
    )
}

export default Button