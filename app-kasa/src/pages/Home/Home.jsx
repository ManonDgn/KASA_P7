// Import style
import "../../utils/styles/Home.css"

// Import composants
import BannerHome from "../../components/Banner/BannerHome"
import Card from "../../components/Card/Card"

//
function Home() {
    return ( 
    <main className="container">
    <div className="home-bloc">
        <BannerHome />
        <div className="home-cards-place">
            <Card />
        </div>
    </div>
    </main>
    )
} 
export default Home;