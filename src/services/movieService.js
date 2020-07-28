import http from "./httpService";

const getMovies = () => {
  return http.get(`/movies`);
};
const getMovie = (id) => {
  return http.get(`/movies/${id}`);
};

const deleteMovie = (id) => {
  return http.delete(`/movies/${id}`);
};

const saveMovie = (movie) => {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`/movies/${movie._id}`, body);
  }

  return http.post(`/movies`, movie);
};

export { getMovies, getMovie, deleteMovie, saveMovie };
