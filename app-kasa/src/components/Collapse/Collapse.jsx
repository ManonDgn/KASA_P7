// Import Style & Medias
import "../../utils/styles/Collapse.css"
import arrowDown from "../../assets/arrow_down.png"
import arrowUp from "../../assets/arrow_up.png"
// Import du UseState 
import { useState } from 'react'

function Collapse(collapsetype) {
    const [isClose, setIsClose] = useState(true)
    return isClose ? (
      <div className ="collapse-bloc">
        <button className ="collapse-btn" onClick={() => setIsClose(false)}>{collapsetype.name}<img src={arrowDown} alt="Arrow Down"></img></button>
      </div>
    ) : (
        <div className ="collapse-bloc">
        <button className ="collapse-btn" onClick={() => setIsClose(true)}>{collapsetype.name}<img src={arrowUp} alt="Arrow Up"></img></button>
        <div className="collapse-desc">{collapsetype.description}</div>
      </div>
    )
}
export default Collapse ;