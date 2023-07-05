import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();
  const [recipes, setRecipe] = useState({});

  useEffect(() => {
    fetch(`https://backend-phase-2-project-2ll9.onrender.com/recipes/${id}`)
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        setRecipe(data)
      })
      .catch(error => console.log(error));
  }, [id]);

  if (Object.keys(recipes).length === 0) {
    return <p>Loading Details</p>;
  }

  const { title,ingredients ,instructions , image} = recipes;
  //console.log(ingredients)

  const mapIngredients = ingredients && ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <ul>{mapIngredients}</ul>
      <h3>Instructions</h3>
      <p>{instructions}</p>
    </div>
  );
}

export default RecipeDetails;

