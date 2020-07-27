import http from "./httpService";

const getGenres = () => {
  return http.get("http://localhost:3900/api/genres");
};

export { getGenres };
