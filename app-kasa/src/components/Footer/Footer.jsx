// Import Style et Medias
import "../../utils/styles/Footer.css"
import Logo from "../../assets/LOGO_W.png"

//
function Footer() {
    return (
        <footer className="footer-bloc">
            <img className="footer-logo" src={Logo} alt="Logo Kasa" />
            <p className="footer-brand">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer ;
