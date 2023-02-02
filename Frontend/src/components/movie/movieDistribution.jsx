import React, { Component } from "react";
import { Helmet } from "react-helmet";
import CardSlider from "../cardSlider";
import { getDistributionByIds } from "../../services/distributionService";
import "../../css/distributionCards.css";

class MovieDistribution extends Component {
  state = {
    distribution: [],
  };
  async componentDidMount() {
    const { movieDistribution } = this.props;
    if (movieDistribution.length !== 0) {
      const { data: distribution } = await getDistributionByIds(
        movieDistribution
      );
      this.setState({ distribution });
    }
  }
  render() {
    const { distribution } = this.state;
    const { movieId } = this.props;
    const slides = Array.from(
      { length: Math.ceil(distribution.length / 3) - 1 },
      (_, i) => i + 1
    );
    console.log(movieId);
    return (
      <div>
        <div
          id={`carousel-${movieId}`}
          className="carousel carousel-dark slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" key={0}>
              <CardSlider cards={distribution.slice(0, 3)} />
            </div>
            {slides.map((slide) => {
              return (
                <div className="carousel-item" key={slide}>
                  <CardSlider
                    cards={distribution.slice(slide * 3, slide * 3 + 3)}
                  />
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#carousel-${movieId}`}
            data-bs-slide="prev"
          >
            <span
              id={`carousel-${movieId}`}
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span id={movieId} className="visually-hidden">
              Previous
            </span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#carousel-${movieId}`}
            data-bs-slide="next"
          >
            <span
              id={movieId}
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span id={movieId} className="visually-hidden">
              Next
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default MovieDistribution;
