import React, { useState } from "react";
import '../form.css';

function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipeData = {
      title,
      ingredients,
      instructions,
      image
    };

    fetch("https://backend-phase-2-project-2ll9.onrender.com/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTitle("");
        setIngredients("");
        setInstructions("");
        setImage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="recipe-form-container">
      <h2 className="recipe-form-title">Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label className="recipe-form-label">
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="recipe-form-input"
          />
        </label>
        <label className="recipe-form-label">
          Ingredients:
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="recipe-form-input"
          />
        </label>
        <label className="recipe-form-label">
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="recipe-form-input"
          />
        </label>
        <label className="recipe-form-label">
          Instructions:
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="recipe-form-textarea"
          />
        </label>
        <button
          type="submit"
          className="recipe-form-submit"
          disabled={!title || !ingredients || !instructions || !image}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RecipeForm;




