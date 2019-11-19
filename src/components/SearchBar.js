import React from "react";

class SearchBar extends React.Component {
  ingredientInput = React.createRef();

  inputs = {
    health: {
      vegan: React.createRef(),
      vegetarian: React.createRef()
    },
    cuisineType: {},
    mealType: {},
    dishType: {},
    diet: {}
  };

  formatFilterInputs = () => {
    const { inputs } = this;
    const filtersObject = {
      health: [],
      cuisineType: [],
      mealType: [],
      dishType: [],
      diet: []
    };

    Object.keys(inputs).forEach(categoryName => {
      filtersObject[categoryName] = Object.keys(inputs[categoryName])
        .filter(filterName => inputs[categoryName][filterName].current.checked)
        .forEach(filterName => {
          filtersObject[categoryName].push(filterName);
        });
    });
    return filtersObject;
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(
      this.ingredientInput.current.value,
      this.formatFilterInputs()
    );
  };

  addParams = id => {
    let advancedParams = "";
    const input = document.getElementById(id);

    if (input) {
      console.log("checked");
    }
  };

  // Create empty string
  // Write callback function to append to string
  // call the callback on submition of each checkbox
  // pass string up to App with callback

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <h1>Search by Ingredient</h1>
            <input
              type="text"
              ref={this.ingredientInput}
              required
              placeholder="What's in your kitchen?"
            />
            <h3>Advanced Search +</h3>
            <div className="search-options">
              <h4>Dietary Restrictions</h4>
              <input
                type="checkbox"
                id="vegan"
                value="vegan"
                ref={this.inputs.health.vegan}
              />
              <label htmlFor="vegan">Vegan</label>
              <input
                type="checkbox"
                id="vegetarian"
                ref={this.inputs.health.vegetarian}
              />
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
              <h4>Meal</h4>
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
              <label htmlFor="Starter">Starter/Appetizer</label>
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
        </form>
      </div>
    );
  }
}

export default SearchBar;
