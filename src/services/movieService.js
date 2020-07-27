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

const saveMovie = (movie) => {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`http://localhost:3900/api/movies/${movie._id}`, body);
  }

  return http.post(`http://localhost:3900/api/movies`, movie);
};

export { getMovies, getMovie, deleteMovie, saveMovie };
