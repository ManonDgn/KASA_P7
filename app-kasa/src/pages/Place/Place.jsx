// Import style & Medias
import "../../utils/styles/Place.css" ;
import starFull from "../../assets/star_rate-full.png" ;
import starEmpty from "../../assets/star_rate-empty.png" ;

// Import des Datas Logements et UseParams React
import { PlacesDatas } from "../../datas/PlaceDatas";
import { useParams } from 'react-router-dom';

// Import composants
import Collapse from "../../components/Collapse/Collapse" ;
import Slideshow from "../../components/Slideshow/Slideshow";
import Error from "../Error/Error";

//
function Place() {
    const { id } = useParams();
    const rang = [1, 2, 3, 4, 5];
    const found = PlacesDatas.find((place) => place.id === id);
    if (!found) {
      return <Error />
    }
      return (
      <main className="container">
        <section>
          <Slideshow pictures={found.pictures} />
        </section>
        <section >
          <div className='place'>
            <div className="place-bloc"> 
              <h1 className='place-title'>{found.title}</h1>
              <h2 className='place-location'>{found.location}</h2>
              <ul className='place-location-tags'>
                {found.tags.map((tags, index) => (
                    <li className="tag-place" key={`${index}-${tags}`}>{tags}</li>
                  ))}
              </ul>
            </div>
  
            <div className='account'>
              <div className='account-host'>
                <ul className='account-host-list'>
                  <li className='account-host-name'>{found.host.name}</li>
                  <li><img src={found.host.picture} alt={`Portrait de ${found.host.name}`} className='account-host-img' /></li>
                </ul>
              </div>
              <div className='account-star'>{rang.map((rangElement) =>
                found.rating >= rangElement ? <span key={rangElement.toString()}> <img src={starFull} alt='' className='account-host-star' /></span> : <span key={rangElement.toString()}><img src={starEmpty} alt='' className='account-host-star' /></span>
              )}
              </div>
            </div>
          </div>
          <div className='collapses-place'>
            <Collapse
              name='Description'
              description={<p>{found.description}</p>} />
  
            <Collapse
              name='Équipements'
              description={<ul className="collapse-equip">{found.equipments.map((equipments, index) => (
                <li key={`${index}-${equipments}`}>{equipments}</li>
              ))}</ul>} />
          </div>
        </section>
      </main>
    )}
export default Place ;