import React from "react";
import MovieReview from "./movieReview";
import MovieDistribution from "./movieDistribution";
import MovieDescription from "./movieDescription";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilePen, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

const MovieCardInfoNavbar = ({ movie }) => {
  library.add(faFilePen, faUserAstronaut);
  return (
    <div
      id={`movie-navbar-${movie._id}`}
      className="d-flex align-items-start navContent"
    >
      <ul
        className="nav nav-tabs flex-column buttonNav"
        role="tablist"
        aria-label="Vertical button  group"
      >
        <li className="nav-item liContent" role="presentation">
          <button
            className="active buttonCard"
            id="description-tab"
            data-bs-toggle="tab"
            data-bs-target={`#movie-navbar-description-button${movie._id}`}
            type="button"
            role="tab"
            aria-controls="description"
            aria-selected="false"
            // onClick={setActive(true)}
          >
            Description
          </button>
        </li>
        <li className="nav-item liContent" role="presentation">
          <button
            className="buttonCard"
            id="casting-tab"
            data-bs-toggle="tab"
            data-bs-target={`#movie-navbar-casting-button${movie._id}`}
            type="button"
            role="tab"
            aria-controls="casting"
            aria-selected="false"
          >
            Casting
          </button>
        </li>
        <li className="nav-item liContent" role="presentation">
          <button
            className="buttonCard"
            id="review-tab"
            data-bs-toggle="tab"
            data-bs-target={`#movie-navbar-review-button${movie._id}`}
            type="button"
            role="tab"
            aria-controls="review"
            aria-selected="false"
          >
            Review
          </button>
        </li>
      </ul>

      <div className="tab-content contentMain">
        <div
          className={`tab-pane contentMain active`}
          id={`movie-navbar-description-button${movie._id}`}
          role="tabpanel"
          aria-labelledby="description-tab"
        >
          <MovieDescription movieDescription={movie} />
        </div>
        <div
          className={`tab-pane contentMain`}
          id={`movie-navbar-casting-button${movie._id}`}
          role="tabpanel"
          aria-labelledby="casting-tab"
        >
          <MovieDistribution
            key={movie._id}
            movieId={movie._id}
            movieDistribution={movie.distribution}
          />
        </div>
        <div
          className={`tab-pane contentMain`}
          id={`movie-navbar-review-button${movie._id}`}
          role="tabpanel"
          aria-labelledby="review-tab"
        >
          <MovieReview key={movie._id} movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieCardInfoNavbar;
