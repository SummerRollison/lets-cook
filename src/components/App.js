import React from "react";
import "../style.css";

import SearchBar from "./SearchBar";
import QuickSearch from "./QuickSearch";
import RecipeList from "./RecipeList";

class App extends React.Component {
  state = { recipes: [] };

  formatParams = params => {
    return Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join("&");
  };

  formatFilters = filters => {
    return Object.keys(filters)
      .map(filterName => {
        return filters[filterName]
          .map(filter => `${filterName}=${filter}`)
          .join("&");
      })
      .join("&");
  };

  // filter ={ mealtypes[], dishtypes[], diet[], cuisine[] }

  getRecipes = (term, filters) => {
    const path = "https://api.edamam.com/search?";

    const searchParams = {
      q: term,
      app_id: "571aced5",
      app_key: "46f6542de77c602d1d8aa6fd78a4f81a"
    };

    const queryString = this.formatParams(searchParams);
    // const filtersQueryString = this.formatFilters(filters);
    const filtersQueryString = "";
    const url = path + queryString + "&" + filtersQueryString;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ recipes: data.hits }));
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.getRecipes} />
        <QuickSearch onClick={this.getRecipes} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
