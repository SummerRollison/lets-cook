import React from "react";

const RecipeList = props => {
  console.log(props.recipes);

  const recipes = props.recipes.map(recipe => {
    return (
      <div className="col-1-3">
        <div className="recipe-card" key={recipe.recipe.uri}>
          <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
            <div>
              <img
                className="recipe-img"
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
              />
              <h2>{recipe.recipe.label}</h2>
              <p>
                {recipe.recipe.yield} Servings | Time: {recipe.recipe.totalTime}{" "}
                | Calories: {Math.round(recipe.recipe.calories)}
              </p>
              <div id="allergies">
                <h4>Allergy Cautions</h4>
                {recipe.recipe.cautions.map(caution => (
                  <span className="cautions">{caution}</span>
                ))}
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return <div>{recipes}</div>;
};

export default RecipeList;
