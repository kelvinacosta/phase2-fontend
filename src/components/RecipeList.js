import React, { useState, useEffect } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://backend-phase-2-project-2ll9.onrender.com/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.log(error));
  }, []);

  const recipeItems = recipes.map(recipe => (
    <li key={recipe.id}>
      <a href={`/recipes/${recipe.id}`}>{recipe.title}</a>
    </li>
  ));

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length > 0 ? (
        <ul>{recipeItems}</ul>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}

export default RecipeList;