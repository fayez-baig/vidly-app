import http from "./httpService";
import config from "./config.json";
const getGenres = () => {
  return http.get(`${config.apiEndPoint}/genres`);
};

export { getGenres };
