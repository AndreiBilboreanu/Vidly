import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../../css/starRating.css";

const StarRataing = ({ onRatingChange, ratingKey }) => {
  const [rating, setRating] = useState(null);
  const [hovered, setHovered] = useState(null);
  library.add(faStar);
  console.log(ratingKey);
  return (
    <div key={`star-rating-${ratingKey}`}>
      {[...Array(10)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={`star-rating-label-${i}`}>
            <input
              type="radio"
              name="rating"
              onClick={() => {
                setRating(ratingValue);
                onRatingChange(ratingValue);
              }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="star"
              style={{
                width: "25px",
                color: `${
                  ratingValue <= (hovered || rating) ? "#7FFFD4" : "#AAA"
                }`,
              }}
              onMouseEnter={() => {
                setHovered(ratingValue);
                setRating(ratingValue);
                onRatingChange(ratingValue);
              }}
              onMouseLeave={() => setHovered(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRataing;
