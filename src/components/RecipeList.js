import React, { useState, useEffect } from 'react';
import "../RecipeListcss.css"

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://backend-phase-2-project-2ll9.onrender.com/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.log(error));
  }, []);

  const recipeItems = recipes.map(recipe => (
    <li className="recipe-list-item" key={recipe.id}>
      <a className="recipe-list-link" href={`/recipes/${recipe.id}`}>{recipe.title}</a>
    </li>
  ));

  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-title">Recipes</h2>
      {recipes.length > 0 ? (
        <ul>{recipeItems}</ul>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}

export default RecipeList;
