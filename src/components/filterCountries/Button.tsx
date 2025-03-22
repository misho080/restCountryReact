import { ButtonType } from "../../types/common"

const Button = ({onClick}:ButtonType) => {
    return (
        <div>
            <button onClick={onClick} className="filterButton">Filter by Region</button>
        </div>
    )
}

export default Button