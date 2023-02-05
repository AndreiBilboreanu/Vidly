import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/distribution";

export function getDistributionByIds(distributions) {
  return http.post(apiEndpoint + "/distributions", { _id: [...distributions] });
}

export function getDistribution() {
  return http.get(apiEndpoint);
}
