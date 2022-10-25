// Import style
import "../../utils/styles/Error.css"

// Import lien nav
import { Link } from 'react-router-dom';

//
function Error() {
    return (
        <main className="container">
        <section className='error'>
            <h1 className='error-title'>404</h1>
            <h2 className='error-title2'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/' className='link-error'><p>Retourner sur la page d’accueil</p></Link>
        </section>
        </main>
    )
}
export default Error ;