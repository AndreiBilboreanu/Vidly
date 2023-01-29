import React, { Component } from "react";
import MovieReview from "./movieReview";

class MovieCardInfoNavbar extends Component {
  state = {};
  render() {
    const { movie } = this.props;
    // console.log(movie);
    return (
      <div
        id={"l" + movie._id.slice(-2)}
        data-target={movie._id.slice(-3)}
        className="d-flex align-items-start navContent"
      >
        <ul
          className="nav nav-tabs flex-column buttonNav"
          id={movie._id.slice(-3)}
          role="tablist"
          aria-label="Vertical button  group"
        >
          <li className="nav-item liContent" role="presentation">
            <button
              className="active buttonCard"
              id="review-tab"
              data-bs-toggle="tab"
              data-bs-target="#review"
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
              data-bs-target="#profile"
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
              data-bs-target="#messages"
              type="button"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              Description
            </button>
          </li>
        </ul>

        <div
          className="tab-content contentMain .{{movie._id.slice(-3)}}"
          id={movie._id.slice(-3)}
        >
          <div
            className="tab-pane active content"
            id="review"
            role="tabpanel"
            aria-labelledby="review-tab"
          >
            <MovieReview movie={movie} />
          </div>
          <div
            className="tab-pane contentMain"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p>{movie.title}</p>
          </div>
          <div
            className="tab-pane contentMain"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            <MovieReview />
          </div>
          <div
            className="tab-pane contentPanel"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            .vvvv..
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCardInfoNavbar;
