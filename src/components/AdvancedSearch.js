import React from "react";

class AdvancedSearch extends React.Component {
  render() {
    // 1. Create empty string
    // 2. Create function that adds properties & values to string
    // 3. Pass string up to App through a callback function
    // 4. Use callback function to merge SearchParms with new Object

    const advancedParams = "";

    const addParam = param => {
      return () => {
        return (advancedParams += param);
      };
    };

    console.log(advancedParams);

    return (
      <div>
        <h3>Advanced Search +</h3>
        <div className="search-options">
          <h4>Dietary Restrictions</h4>
          <input
            type="checkbox"
            id="vegan"
            value="vegan"
            onClick={this.addParam("health=vegan")}
          />
          <label htmlFor="vegan">Vegan</label>
          <input type="checkbox" id="vegetarian" />
          <label htmlFor="vegetarian">Vegetarian</label>
          <input type="checkbox" id="gluten" />
          <label htmlFor="gluten">Gluten Free</label>
          <input type="checkbox" id="peanut" />
          <label htmlFor="peanut">No Peanuts</label>
          <input type="checkbox" id="tree-nut" />
          <label htmlFor="tree-nut">No Tree Nuts</label>
          <input type="checkbox" id="shellfish" />
          <label htmlFor="shellfish">No Shellfish</label>
          <input type="checkbox" id="lowfat" />
          <label htmlFor="lowfat">Low Fat</label>
          <input type="checkbox" id="lowcarb" />
          <label htmlFor="lowcarb">Low Carb</label>
          <h4>Meal Type</h4>
          <input type="radio" id="breakfast" name="meal" />
          <label htmlFor="breakfast">Breakfast</label>
          <input type="radio" id="lunch" name="meal" />
          <label htmlFor="lunch">Lunch</label>
          <input type="radio" id="dinner" name="meal" />
          <label htmlFor="dinner">Dinner</label>
          <input type="radio" id="snack" name="meal" />
          <label htmlFor="snack">Snack</label>
          <h4>Dish Type</h4>
          <input type="checkbox" id="Drinks" />
          <label htmlFor="Drinks">Drinks</label>
          <input type="checkbox" id="Desserts" />
          <label htmlFor="Desserts">Desserts</label>
          <input type="checkbox" id="Main course" />
          <label htmlFor="Main course">Main course</label>
          <input type="checkbox" id="Salad" />
          <label htmlFor="Salad">Salad</label>
          <input type="checkbox" id="Side dish" />
          <label htmlFor="Side dish">Side dish</label>
          <input type="checkbox" id="Soup" />
          <label htmlFor="Soup">Soup</label>
          <input type="checkbox" id="Starter" />
          <label htmlFor="Starter">Starter</label>
          <h4>Cuisine</h4>
          <input type="checkbox" id="American" />
          <label htmlFor="American">American</label>
          <input type="checkbox" id="Mediterranean" />
          <label htmlFor="Mediterranean">Mediterranean</label>
          <input type="checkbox" id="Asian" />
          <label htmlFor="Asian">Asian</label>
          <input type="checkbox" id="Italian" />
          <label htmlFor="Italian">Italian</label>
          <input type="checkbox" id="Kosher" />
          <label htmlFor="Kosher">Kosher</label>
          <input type="checkbox" id="Mexican" />
          <label htmlFor="Mexican">Mexican</label>
        </div>
      </div>
    );
  }
}

export default AdvancedSearch;
