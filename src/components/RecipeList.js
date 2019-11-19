import React from "react";

const RecipeList = props => {
  console.log(props.recipes);
  const recipes = props.recipes.map(recipe => {
    return (
      <div className="recipe-card" key={recipe.recipe.uri}>
        <a
          className="ui card"
          href={recipe.recipe.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="content">
            <img
              className="description recipe-img"
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
            <h3 className="header">{recipe.recipe.label}</h3>
            <p>
              {recipe.recipe.yield} Servings | Time: {recipe.recipe.totalTime} |
              Calories: {Math.round(recipe.recipe.calories)}
            </p>
          </div>
        </a>
      </div>
    );
  });

  return <div>{recipes}</div>;
};

export default RecipeList;
