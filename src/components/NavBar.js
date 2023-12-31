import React from 'react';
import { Link } from 'react-router-dom';
import '../NaBarcss.css';

function NavBar() {
  return (
    
    //Create a nav to store Home,recipe and newRecipe link for the app
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes">Recipe</Link>
        </li>
        <li>
          <Link to="/recipes/new">New Recipe</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
