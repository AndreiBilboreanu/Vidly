import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/distribution";

export function getDistributionByIds(distributions) {
  //   const body =;
  //   console.log(body);
  return http.post(apiEndpoint + "/distributions", { _id: [...distributions] });
}
