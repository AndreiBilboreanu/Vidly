import React, { Component } from "react";
import "../../css/movieCards.css";
import MovieCardInfoNavbar from "./movieCardInfoNavbar";

class MovieCards extends Component {
  state = {};
  render() {
    const { movie } = this.props;

    return (
      <div className="card mb-3 cardContent">
        <div className="row g-0 ">
          <div className="col-md-4 imgContent">
            <img src={movie.image} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8 infoContent">
            <MovieCardInfoNavbar movie={movie} />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCards;
