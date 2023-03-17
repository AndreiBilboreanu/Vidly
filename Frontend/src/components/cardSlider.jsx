import React from "react";
import "../css/distributionCards.css";

const CardSlider = ({ cards }) => {
  if (cards.length === 0) return null;

  return (
    <div className="row row-cols-3 flex-column sliderCards">
      {cards.map((c) => {
        return (
          <div className="cards-wrapper col d-flex" key={c.name}>
            <div
              className="card cardBackground"
              // style={{ maxWidth: "44%", maxHeight: "100%" }}
            >
              <img
                className="card-img-top rounded-circle"
                src={c.profileImage}
                alt={c.name}
              />
              <div className="card-body">
                <h6 className="card-title">{c.name}</h6>
                <p className="card-text">{c.role}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardSlider;







// export default CardSlider;
// class CardSlider extends Component {
//   state = {};
//   render() {
//     const { cards } = this.props;
//     if (cards.length === 0) return null;
//     return (
//       <div className="row row-cols-3 flex-column sliderCards">
//         {cards.map((c) => {
//           return (
//             <div className="cards-wrapper col d-flex" key={c.name}>
//               <div
//                 className="card cardBackground"
//                 // style={{ maxWidth: "44%", maxHeight: "100%" }}
//               >
//                 <img
//                   className="card-img-top rounded-circle"
//                   src={c.profileImage}
//                   alt={c.name}
//                 />
//                 <div className="card-body">
//                   <h6 className="card-title">{c.name}</h6>
//                   <p className="card-text">{c.role}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
// export default CardSlider;
