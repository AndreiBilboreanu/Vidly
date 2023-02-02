import React, { useEffect, useState } from "react";
import ReviewCard from "../reviewCard";
import { getReviews } from "../../services/reviewService";
import "../../css/reviewCard.css";

const MovieReview = ({ movie }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getReviews(movie._id);
      setReviews(result.data);
    }
    fetchData();
  }, []);

  // if (this.state.reviews) return null;
  console.log(reviews, "reviews");
  return (
    <div
      id={`carousel-review${movie._id}`}
      className="carousel carousel-dark slide"
    >
      <div className="carousel-inner revewCarouselInner">
        <div className="carousel-item active" key={0}>
          {reviews && <ReviewCard review={reviews[0]} />}
        </div>
        {reviews &&
          [...Array(reviews.length - 1).keys()].map((review, index) => {
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
        data-bs-target={`#carousel-review${movie._id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carousel-review${movie._id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MovieReview;
