import React, { Component } from "react";
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
    console.log(distribution);
    const slides = Array.from(
      { length: Math.ceil(distribution.length / 3) - 1 },
      (_, i) => i + 1
    );
    return (
      <div
        id="carouselCards"
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
                {console.log(distribution.slice(slide * 2 - 1, 3), "up")}
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
          data-bs-target="#carouselCards"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselCards"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default MovieDistribution;
