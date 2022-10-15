import { Link } from 'react-router-dom'
import '../../utils/styles/Header.css'
import Logo from '../../assets/LOGO.png'
 
function Header() {
    return (
        <header>
            <div className='Header_div'>
                <img className="Header_div_logo" src={Logo} alt="Logo" />
                <nav className='Header_div_nav'>
                    <li className='Header_link'><Link className='Link_Nav' to="/">Home</Link></li>
                    <li className='Header_link'><Link className='Link_Nav' to="/About">About</Link></li>
                </nav>
            </div>
        </header>
    )
}

export default Header ;