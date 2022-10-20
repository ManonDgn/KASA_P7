// Import Style & Medias
import "../../utils/styles/Slideshow.css";
import arrowLeft from "../../assets/arrow_back_24px.png"
import arrowRight from "../../assets/arrow_forward_24px.png"
// Import du UseState 
import { useState } from 'react'
//
function Slideshow(slides) {
    const [current, setCurrent] = useState(0);
    const length = slides.pictures.length;
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    
    const previous = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    return (
        <div className='carousel'>
    
          {length > 1 && (<div onClick={previous}><img src={arrowLeft} alt='flèche vers la gauche' className="carousel-btn-left" /></div>)}
          {length > 1 && (<div onClick={next}><img src={arrowRight} alt='flèche vers la droite' className="carousel-btn-right" /></div>)}
    
          {slides.pictures.map((image, index) => {
            return (
              <div key={index}>
                {index === current && (<img src={image} alt="Exemple du logement" className='carousel-img' />)}
              </div>
            )
          })}
        </div>
    )
}
  
export default Slideshow ;