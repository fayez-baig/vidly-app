import http from "./httpService";

const getMovies = () => {
  return http.get("http://localhost:3900/api/movies");
};

const deleteMovie = (id) => {
  return http.delete(`http://localhost:3900/api/movies/${id}`);
};
export { getMovies, deleteMovie };
