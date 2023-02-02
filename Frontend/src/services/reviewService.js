import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/reviews/";

function reviewUrl(id) {
  return `${apiEndpoint}/${id}`;
}
export function getAllReviews() {
  return http.get(apiEndpoint);
}
export function getReviews(movieId) {
  return http.get(reviewUrl(movieId));
}

