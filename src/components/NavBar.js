import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <nav>
            <ul>
                <li>
            <Link to="/">Home</Link>
             </li>
             <li>
             <Link to="/recipes">Recipes</Link>
            
             </li>
             <li>
             <Link to="/recipes/new">New Recipe</Link>
             </li>

            </ul>
        </nav>
    )
}

export default NavBar ;