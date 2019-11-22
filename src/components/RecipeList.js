import React from "react";

const RecipeList = props => {
  console.log(props.recipes);

  const recipes = props.recipes.map(({ recipe }) => (
    <div className="col-1-3" key={recipe.uri}>
      <div className="recipe-card">
        <a href={recipe.url} target="_blank" rel="noopener noreferrer">
          <div>
            <img className="recipe-img" src={recipe.image} alt={recipe.label} />
            <h2>{recipe.label}</h2>
            <p>
              {recipe.yield} Servings | Time: {recipe.totalTime} | Calories:{" "}
              {Math.round(recipe.calories)}
            </p>
            <div id="allergies">
              <h4>Allergy Cautions</h4>
              {recipe.cautions.map((caution, index) => (
                <span key={index} className="cautions">
                  {caution}
                </span>
              ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  ));

  return <div>{recipes}</div>;
};

export default RecipeList;
