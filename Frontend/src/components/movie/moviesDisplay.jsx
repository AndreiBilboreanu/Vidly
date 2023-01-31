import React, { Component } from "react";
import MovieCards from "./movieCards";
class MoviesDisplay extends Component {
  state = {};

  render() {
    const { movies } = this.props;

    return (
      <>
        {movies.map((movie) => (
          <MovieCards key={movie._id} movie={movie} />
        ))}
      </>
    );
  }
}

export default MoviesDisplay;
