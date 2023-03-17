import React, { Component } from "react";
import "../../css/movieCards.css";
import MovieCardInfoNavbar from "./movieCardInfoNavbar";
import MovieToWatchlist from "./movieToWatchlist";

class MovieCards extends Component {
  state = {};
  render() {
    const { movie,user } = this.props;
    return (
      <div className="card mb-3 cardContent">
        <div className="row g-0 ">
          <div className="col-md-4 imgContent">
            <img src={movie.image} className="img-fluid rounded-start" alt="" />
            <MovieToWatchlist movieId={movie._id} user={user}/>
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
