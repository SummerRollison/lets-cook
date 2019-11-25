import React from "react";
import "../style.css";
import "../layout.css";

import Header from "./Header";
import SearchBar from "./SearchBar";
import QuickSearch from "./QuickSearch";
import RecipeList from "./RecipeList";
import Footer from "./Footer";

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
      .filter(filter => filter !== "")
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
    const filtersQueryString = this.formatFilters(filters);
    const url = path + queryString + "&" + filtersQueryString;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ recipes: data.hits }));
  };

  render() {
    return (
      <div>
        <Header />
        <div className="ui container">
          <div className="row">
            <div className="col-2-3">
              <SearchBar onSubmit={this.getRecipes} />
            </div>
            <div className="col-1-3 tablet">
              <QuickSearch onClick={this.getRecipes} />
            </div>
          </div>
          <RecipeList recipes={this.state.recipes} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
