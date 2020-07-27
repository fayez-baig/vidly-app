import http from "./httpService";

const getMovies = () => {
  return http.get("http://localhost:3900/api/movies");
};
const getMovie = (id) => {
  return http.get(`http://localhost:3900/api/movies/${id}`);
};

const deleteMovie = (id) => {
  return http.delete(`http://localhost:3900/api/movies/${id}`);
};

const addMovie = (id) => {
  return http.post(`http://localhost:3900/api/movies/${id}`);
};

export { getMovies, getMovie, deleteMovie, addMovie };
