import React, { Component } from "react";
import axios from "axios";
import { ApiKey } from "../config";

export const { Provider, Consumer } = React.createContext();

export class MyProvider extends Component {
  state = {
    MoviesInfo: [],
    SearchedMovies: [],
    SearchedLMovies: [],
    searchLatest: "",
    searchAll: ""
  };

  searchLhandle = event => {
    event.preventDefault();
    const value = event.target.value.toLowerCase().trim();
    this.setState({ searchLatest: value });
  };
  searchAhandle = event => {
    const input = event.target.value.toLowerCase().trim();
    this.setState({ searchAll: input });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${input}&page=1&include_adult=true`
      )
      .then(response => {
        this.setState({
          SearchedMovies: response.data.results
        });
      });
  };

  clearSearch = event => {
    this.setState({ searchAll: "" });
  };
  componentDidMount() {
    let todayDate = new Date();
    let today =
      todayDate.getFullYear() +
      "-" +
      (todayDate.getMonth() + 1) +
      "-" +
      todayDate.getDate();
    let oneMonthAgo =
      (todayDate.getMonth() === 0
        ? todayDate.getFullYear() - 1
        : todayDate.getFullYear()) +
      "-" +
      (todayDate.getMonth() === 0
        ? todayDate.getMonth() + 12
        : todayDate.getMonth()) +
      "-" +
      todayDate.getDate();

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US
                     &sort_by=popularity.desc&include_adult=true&include_vid
                     eo=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_relea
                     se_date.lte=${today}`
      )
      .then(response => {
        this.setState({ MoviesInfo: response.data.results });
      })

      .catch(error => console.log("fetching", error));
  }
  render() {
    const filteredMoviesInfo = this.state.MoviesInfo.filter(movie =>
      movie.title.toLowerCase().includes(this.state.searchLatest)
    );

    return (
      <Provider
        value={{
          MoviesInfo: filteredMoviesInfo,
          searchLhandle: this.searchLhandle,
          searchLatest: this.state.searchLatest,
          searchAhandle: this.searchAhandle,
          searchAll: this.state.searchAll,
          SearchedMovies: this.state.SearchedMovies,
          clearSearch: this.clearSearch
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
