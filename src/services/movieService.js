import http from "./httpService";
import config from "./config.json";

const getMovies = () => {
  return http.get(`${config.apiEndPoint}/movies`);
};
const getMovie = (id) => {
  return http.get(`${config.apiEndPoint}/movies/${id}`);
};

const deleteMovie = (id) => {
  return http.delete(`${config.apiEndPoint}/movies/${id}`);
};

const saveMovie = (movie) => {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`${config.apiEndPoint}/movies/${movie._id}`, body);
  }

  return http.post(`${config.apiEndPoint}/movies`, movie);
};

export { getMovies, getMovie, deleteMovie, saveMovie };
