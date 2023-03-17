import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MovieToWatchlist = ({ movieId, user }) => {
  const handleMovieToWatchlist = () => {
    if (!user) {
      window.location = "/login";
    }
  };

  return (
    <div className="addMovieToWatchlist" onClick={handleMovieToWatchlist}>
      <FontAwesomeIcon icon={faPlus} className="addButton" />
    </div>
  );
};

export default MovieToWatchlist;
