import React, { Component } from "react";
import ReviewCard from "../reviewCard";
import { getReviews } from "../../services/reviewService";
import "../../css/reviewCard.css";

class MovieReview extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movie } = this.props;
    const { data: reviews } = await getReviews(movie._id);
    this.setState({ reviews });
  }

  render() {
    const { movie } = this.props;
    const { reviews } = this.state;
    console.log(reviews.length);
    return (
      <div id="reviewCarousel" className="carousel carousel-dark slide">
        <div className="carousel-inner revewCarouselInner">
          <div className="carousel-item active" key={0}>
            {movie.title === "Airplane" && <ReviewCard review={reviews[0]} />}
          </div>
          {reviews.length !== 0 &&
            [...Array(reviews.length-1).keys()].map((review, index) => {
              return (
                <div className="carousel-item" key={index + 1}>
                  <ReviewCard review={reviews[index + 1]} />
                </div>
              );
            })}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#reviewCarousel"
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
          data-bs-target="#reviewCarousel"
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

export default MovieReview;
