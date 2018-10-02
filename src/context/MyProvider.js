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

  searchAhandle = event => {
    event.preventDefault();
    const value = event.target.value.toLowerCase().trim();
    this.setState({ searchAll: value });
    this.getResult(this.state.searchAll);
  };

  getResult = input => {
    console.log(input);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${input}&page=1&include_adult=true`
    )
      .then(reslt => reslt.json())
      .then(response => {
        this.setState({ SearchedMovies: response.results });
        console.log(this.state.SearchedMovies);
      });
  };

  searchLhandle = event => {
    event.preventDefault();
    const value = event.target.value.toLowerCase().trim();
    this.setState({ searchLatest: value });
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
        console.log(this.state.MoviesInfo);
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
          searchAhandle: this.searchAhandle,
          searchAll: this.state.searchAll,
          searchLatest: this.state.searchLatest,
          SearchedMovies: this.state.SearchedMovies
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
