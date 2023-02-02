import React, { Component } from "react";
import { getUserName } from "../services/userService";
import "../css/distributionCards.css";
import userPhoto from "../images/userPhoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

class ReviewCard extends Component {
  state = {
    userName: "",
    reviewNumber: "6",
    review: [],
  };

  async componentDidMount() {
    const { review } = this.props;
    const { data: userName } = await getUserName(review.userId);
    const reviewNumber = Math.floor(Math.random() * 10);
    this.setState({ userName, reviewNumber });
  }

  async componentDidUpdate() {
    const { review } = this.props;
    const { data: userName } = await getUserName(review.userId);
    this.setState({ userName, review });
  }
  render() {
    library.add(faThumbsUp);
    const { userName, reviewNumber, review } = this.state;
    return (
      <div className="reviewSliderCards">
        <div className="reviewCardsWrapper">
          <div className="card reviewCardBackground">
            <div className="d-flex flex-row">
              <img
                className="p-2 cardImgTop rounded-circle"
                src={userPhoto}
                alt="userPhoto"
              />

              <div className="p2 reviewUsernameData">
                <p className="reviewUsername">{userName}</p>
                <p className="reviewNumber">{reviewNumber} Reviews</p>
              </div>
            </div>
            <div className="reviewDescription">
              <p>&emsp;"{review["review"]}"</p>
            </div>
            <div className="likesRow row">
              <div className="col-sm d-flex justify-content-center">
                <span className="likesNumber">{review["likes"]}</span>
                <FontAwesomeIcon className="colorThumb" icon={faThumbsUp} />
              </div>
              <div className="col-sm d-flex justify-content-center">
                <span className="likesNumber">{review["dislikes"]}</span>
                <FontAwesomeIcon className="colorThumb" icon={faThumbsDown} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ReviewCard;
