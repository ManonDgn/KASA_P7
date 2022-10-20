// Import style
import "../../utils/styles/Home.css"

// Import composants
import BannerHome from "../../components/Banner/BannerHome"
import Card from "../../components/Card/Card"

//
function Home() {
    return ( 
    <div className="home-bloc">
        <BannerHome />
        <div className="home-cards-place">
            <Card />
        </div>
    </div>
    )
}
  
export default Home;