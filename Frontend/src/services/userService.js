import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/users";

function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

export function getUserName(userId) {
  return http.get(userUrl(userId));
}
