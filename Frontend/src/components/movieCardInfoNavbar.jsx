import React, { Component } from "react";
import MovieReview from "./movieReview";
import MovieDistribution from "./movieDistribution";

class MovieCardInfoNavbar extends Component {
  state = {};
  render() {
    const { movie } = this.props;
    // console.log(movie);
    return (
      <div id={movie._id} className="d-flex align-items-start navContent">
        <ul
          className="nav nav-tabs flex-column buttonNav"
          role="tablist"
          aria-label="Vertical button  group"
        >
          <li className="nav-item liContent" role="presentation">
            <button
              className="active buttonCard"
              id="review-tab"
              data-bs-toggle="tab"
              data-bs-target={`#${movie._id.slice(-2)}`}
              type="button"
              role="tab"
              aria-controls="review"
              aria-selected="false"
            >
              Review
            </button>
          </li>
          <li className="nav-item liContent" role="presentation">
            <button
              className="buttonCard"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target={`#${movie._id.slice(-3)}`}
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Casting
            </button>
          </li>
          <li className="nav-item liContent" role="presentation">
            <button
              className=" buttonCard"
              id="messages-tab"
              data-bs-toggle="tab"
              data-bs-target={`#${movie._id.slice(-4)}`}
              type="button"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              Description
            </button>
          </li>
        </ul>

        <div className="tab-content contentMain">
          <div
            className="tab-pane active content"
            id={movie._id.slice(-2)}
            role="tabpanel"
            aria-labelledby="review-tab"
          >
            <MovieReview key={movie._id} movie={movie} />
          </div>
          <div
            className="tab-pane contentMain"
            id={movie._id.slice(-3)}
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <MovieDistribution movieDistribution={movie.distribution} />
          </div>
          <div
            className="tab-pane contentMain"
            id={movie._id.slice(-4)}
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            Discription
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCardInfoNavbar;
