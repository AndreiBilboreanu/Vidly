import React, { Component } from "react";
import MovieCards from "./movieCards";
class MoviesDisplay extends Component {
  state = {};

  render() {
    const { movies,user} = this.props;

    return (
      <>
        {movies.map((movie) => (
          <MovieCards key={movie._id} movie={movie} user={user}/>
        ))}
      </>
    );
  }
}

export default MoviesDisplay;
