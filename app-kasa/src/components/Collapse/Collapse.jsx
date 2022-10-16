// Import Style & Medias
import "../../utils/styles/Collapse.css"
import arrowDown from "../../assets/arrow_down.png"
import arrowUp from "../../assets/arrow_up.png"
// Import du UseState 
import { useState } from 'react'

function Collapse(collapsetype) {
    const [isClose, setIsClose] = useState(true)
    return isClose ? (
      <div className ="positionCollapse">
        <button className ="collapseBtn" onClick={() => setIsClose(false)}>{collapsetype.name}<img src={arrowDown} alt="Arrow Down"></img></button>
      </div>
    ) : (
        <div className ="positionCollapse">
        <button className ="collapseBtn" onClick={() => setIsClose(true)}>{collapsetype.name}<img src={arrowUp} alt="Arrow Up"></img></button>
        <div className="collDesc">{collapsetype.description}</div>
      </div>
    )
}
export default Collapse ;