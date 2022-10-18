// Import du Style CSS
import "../../utils/styles/Card.css"
// Import des Liens React 
import { Link } from 'react-router-dom'
// Import des Datas des Places
import { PlacesDatas } from "../../datas/PlaceDatas";

//
function Card () {
    return (
        <ul className="Card_el">
            {PlacesDatas.map (({title, id, cover}) => (
                <li className="Card_design" key={id}>
                    <Link to ={`/Place/${id}`}>
                    <div className="Card_color"></div>
                    <h2 className="Card_title">{title}</h2>
                    <img className="Card_img" src={cover} alt={title} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default Card ;