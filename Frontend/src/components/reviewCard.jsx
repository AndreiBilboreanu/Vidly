import React, { useState, useEffect } from "react";
import userPhoto from "../images/userPhoto.png";
import { getUserName } from "../services/userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../css/distributionCards.css";

const ReviewCard = ({ review }) => {
  const [username, setUsername] = useState("");
  // const [reviewNumber, setReviewNumber] = useState(
  //   Math.floor(Math.random() * 5) + 3
  // );
  // const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: userName } = await getUserName(review.userId);
      setUsername(userName);
    };
    fetchData();
  });

  library.add(faThumbsUp);

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
              <p className="reviewUsername">{username}</p>
              <p className="reviewNumber">{Math.floor(Math.random() * 9) + 3} Reviews</p>
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
};

export default ReviewCard;

// class ReviewCard extends Component {
//   state = {
//     userName: "",
//     reviewNumber: "6",
//     review: [],
//   };

//   async componentDidMount() {
//     const { review } = this.props;
//     const { data: userName } = await getUserName(review.userId);
//     const reviewNumber = Math.floor(Math.random() * 5) + 3;
//     this.setState({ userName, reviewNumber });
//   }

//   render() {
//     library.add(faThumbsUp);
//     const { userName, reviewNumber } = this.state;
//     const { review } = this.props;
//     return (
//       <div className="reviewSliderCards">
//         <div className="reviewCardsWrapper">
//           <div className="card reviewCardBackground">
//             <div className="d-flex flex-row">
//               <img
//                 className="p-2 cardImgTop rounded-circle"
//                 src={userPhoto}
//                 alt="userPhoto"
//               />

//               <div className="p2 reviewUsernameData">
//                 <p className="reviewUsername">{userName}</p>
//                 <p className="reviewNumber">{reviewNumber} Reviews</p>
//               </div>
//             </div>
//             <div className="reviewDescription">
//               <p>&emsp;"{review["review"]}"</p>
//             </div>
//             <div className="likesRow row">
//               <div className="col-sm d-flex justify-content-center">
//                 <span className="likesNumber">{review["likes"]}</span>
//                 <FontAwesomeIcon className="colorThumb" icon={faThumbsUp} />
//               </div>
//               <div className="col-sm d-flex justify-content-center">
//                 <span className="likesNumber">{review["dislikes"]}</span>
//                 <FontAwesomeIcon className="colorThumb" icon={faThumbsDown} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default ReviewCard;
