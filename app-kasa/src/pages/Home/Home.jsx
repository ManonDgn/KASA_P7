// Import style
import "../../utils/styles/Home.css"

// Import composants
import BannerHome from "../../components/Banner/BannerHome"
import Card from "../../components/Card/Card"

//
function Home() {
    return ( 
    <div className="Home_el">
        <BannerHome />
        <div className="Home_card_place">
            <Card />
        </div>
    </div>
    )
}
  
export default Home;