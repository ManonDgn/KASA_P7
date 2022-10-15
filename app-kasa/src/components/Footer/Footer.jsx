// Import Style et Medias
import "../../utils/styles/Footer.css"
import Logo from "../../assets/LOGO_W.png"

//
function Footer() {
    return (
        <footer className="Footer_el">
            <img className="Footer_logo" src={Logo} alt="Logo" />
            <p className="Footer_p">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer ;