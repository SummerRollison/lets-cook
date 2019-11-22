import React from "react";

class SearchBar extends React.Component {
  ingredientInput = React.createRef();

  inputs = {
    health: {
      vegan: React.createRef(),
      vegetarian: React.createRef()
    },
    cuisinetype: {},
    mealType: {},
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
      Object.keys(inputs[categoryName])
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

    this.ingredientInput.current.value = "";
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <h2>Don't let groceries go to waste</h2>
            <p>Find recipes based on ingredients you already have!</p>
            <input
              type="text"
              ref={this.ingredientInput}
              required
              placeholder="Marinara... Broccoli..."
            />
            <h3>Dietary Restrictions?</h3>
            <div className="search-options">
              <label className="checkbox-default">
                <input
                  type="checkbox"
                  id="vegan"
                  value="vegan"
                  ref={this.inputs.health.vegan}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label" htmlFor="vegan">
                Vegan
              </label>
              <label className="checkbox-default">
                <input
                  type="checkbox"
                  id="vegetarian"
                  ref={this.inputs.health.vegetarian}
                />
                <span className="checkbox-custom"></span>
              </label>
              <label className="checkbox-label" htmlFor="vegan">
                Vegetarian
              </label>
            </div>
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
