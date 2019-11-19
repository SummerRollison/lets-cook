import React from "react";

class QuickSearch extends React.Component {
  state = { term: "" };

  buildSearch = protein => {
    return () => {
      return this.props.onClick(protein);
    };
  };

  render() {
    return (
      <div className="quick-search">
        <h3>Quick Search</h3>
        <button onClick={this.buildSearch("Chicken")}>Chicken</button>
        <button onClick={this.buildSearch("Beef")}>Beef</button>
        <button onClick={this.buildSearch("Pork")}>Pork</button>
        <button onClick={this.buildSearch("Shrimp")}>Shrimp</button>
        <button onClick={this.buildSearch("Vegetarian")}>Vegetarian</button>
        <button onClick={this.buildSearch("Vegan")}>Vegan</button>
      </div>
    );
  }
}

export default QuickSearch;
