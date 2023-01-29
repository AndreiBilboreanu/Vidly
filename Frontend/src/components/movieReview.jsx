import React, { Component } from "react";

class MovieReview extends Component {
  state = {};

  render() {
    const { movie } = this.props;
    // console.log(movie);
    return (
      <>
        <p className="reviewContent">
          "Nullam in tellus eget velit tristique finibus a eu quam. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam eget efficitur mauris, quis ultrices mauris."
        </p>
      </>
    );
  }
}

export default MovieReview;
