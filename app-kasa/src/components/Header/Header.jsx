// Import Liens React de la nav
import { Link } from 'react-router-dom'

// Import Style et Media
import '../../utils/styles/Header.css'
import Logo from '../../assets/LOGO.png'

//
function Header() {
    return (
        <header>
            <div className='header-bloc'>
                <img className="header-logo" src={Logo} alt="Logo" />
                <nav className='header-nav'>
                    <li className='header-link'><Link className='nav-links home-link' to="/">Accueil</Link></li>
                    <li className='header-link'><Link className='nav-links about-link' to="/a-propos">A propos</Link></li>
                </nav>
            </div>
        </header>
    )
}
export default Header ;