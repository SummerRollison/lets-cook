import React from "react";

class QuickSearch extends React.Component {
  state = { term: "" };

  buildSearch = (protein, filters) => {
    return () => {
      return this.props.onClick(protein, filters);
    };
  };

  render() {
    return (
      <div className="ui segment quick-search">
        <h2>Looking for Inspiration?</h2>
        <p>Quickly search for a wider variety of recipes</p>
        <div className="buttons">
          <button onClick={this.buildSearch("Chicken", "")}>Chicken</button>
          <button onClick={this.buildSearch("Beef", "")}>Beef</button>
          <button onClick={this.buildSearch("Pork", "")}>Pork</button>
          <button onClick={this.buildSearch("Shrimp", "")}>Shrimp</button>
          <button onClick={this.buildSearch("Vegetarian", "")}>
            Vegetarian
          </button>
          <button onClick={this.buildSearch("Vegan", "")}>Vegan</button>
        </div>
      </div>
    );
  }
}

export default QuickSearch;
