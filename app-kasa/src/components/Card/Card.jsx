// Import du Style CSS
import "../../utils/styles/Card.css"
// Import des Liens React 
import { Link } from 'react-router-dom'
// Import des Datas Logements
import { PlacesDatas } from "../../datas/PlaceDatas";

//
function Card () {
    return (
        <ul className="card-bloc">
            {PlacesDatas.map (({title, id, cover}) => (
                <li className="card-design" key={id}>
                    <Link to ={`/Logement/${id}`}>
                    <div className="card-color"></div>
                    <h2 className="card-title">{title}</h2>
                    <img className="card-img" src={cover} alt={title} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default Card ;