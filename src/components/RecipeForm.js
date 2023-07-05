import React, { useState } from "react";

function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image,setImage] = [""]

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipeData = {
      title,
      ingredients,
      instructions,
      image
    };
    

    fetch("https://backend-phase-2-project-2ll9.onrender.com/recipes/new", {
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
    <div>
      <h2>Add new Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Ingredients:
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Instructions:
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RecipeForm;


