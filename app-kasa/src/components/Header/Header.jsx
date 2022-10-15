// Import Liens React de la nav
import { Link } from 'react-router-dom'

// Import Style et Media
import '../../utils/styles/Header.css'
import Logo from '../../assets/LOGO.png'

//
function Header() {
    return (
        <header className='Header'>
            <div className='Header_el'>
                <img className="Header_logo" src={Logo} alt="Logo" />
                <nav className='Header_nav'>
                    <li className='Header_link'><Link className='Link_Nav' to="/">Home</Link></li>
                    <li className='Header_link'><Link className='Link_Nav' to="/About">About</Link></li>
                </nav>
            </div>
        </header>
    )
}
export default Header ;