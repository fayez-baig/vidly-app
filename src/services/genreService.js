import http from "./httpService";
import config from "./config.json";
const getGenres = () => {
  return http.get(`/genres`);
};

export { getGenres };
