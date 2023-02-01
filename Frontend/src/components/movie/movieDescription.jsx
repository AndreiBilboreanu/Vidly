import React, { Component } from "react";
import "../../css/movieDescription.css";
import "../../css/rating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import StarRataing from "../common/starRating";
class MovieDescription extends Component {
  state = { ratingValue: null };

  handleRatingChange = (ratingValue) => {
    console.log(ratingValue);
    this.setState({ ratingValue: ratingValue });
  };

  openNav() {
    if (document.getElementById("rating"))
      document.getElementById("rating").style.width = "100%";
  }

  closeNav() {
    if (document.getElementById("rating"))
      document.getElementById("rating").style.width = "0%";
  }

  render() {
    library.add(faStar, regularStar);
    const { movieDescription } = this.props;
    return (
      <div className="movieDescription">
        <h5 className="movieTitle">{movieDescription.title}</h5>
        <p className="descriptionParagraph">
          &emsp; "{movieDescription.description}"
        </p>
        <div className="movieRating row">
          <div className="col-sm d-flex justify-content-center">
            Vidly Rating &emsp;{" "}
            <FontAwesomeIcon icon={faStar} className="ratingStar" />
            {movieDescription.rate}/ <span>10</span>
          </div>
          <div className="col-sm d-flex justify-content-center">
            Your Rating &emsp;{" "}
            <div id="rating" ref={this.rating} className="overlay">
              <button
                // href="javascript:void(0)"
                className="closebtn"
                onClick={() => this.closeNav()}
              >
                &times;
              </button>
              <div className="overlay-content">
                <FontAwesomeIcon icon={faStar} className="ratingOverlay" />
                {this.state.ratingValue && (
                  <p className="iconRating">{this.state.ratingValue}</p>
                )}
                <p>Rate this!</p>
                <h3>{movieDescription.title}</h3>
                <StarRataing
                  key={movieDescription._id}
                  onRatingChange={this.handleRatingChange}
                />
              </div>
            </div>
            <button
              id={movieDescription.title}
              className="rateTag"
              onClick={() => this.openNav()}
            >
              Rate <FontAwesomeIcon icon={regularStar} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDescription;
