import "../../utils/styles/Home.css"
import BannerHome from "../../components/Banner/BannerHome"
import Card from "../../components/Card/Card"

function Home() {
    return ( 
    <div className="Home_div">
        <BannerHome />
        <div className="Card_div">
        <Card />
        </div>
    </div>
    )
  }
  
  export default Home;