import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../RecipeDetailscss.css'; // Import the CSS file

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://backend-phase-2-project-2ll9.onrender.com/recipes/${id}`)
      .then(response => response.json())
      .then(data => {
        setRecipe(data);
      })
      .catch(error => console.log(error));
  }, [id]);

  if (!recipe) {
    return <p>Loading Details</p>;
  }

  const { title, ingredients, instructions, image } = recipe;

  const mapIngredients = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <div className="recipe-details">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <ul>{mapIngredients}</ul>
      <h3>Instructions</h3>
      <p>{instructions}</p>
    </div>
  );
}

export default RecipeDetails;




