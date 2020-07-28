import axios from "axios";
import { toast } from "react-toastify";
import { log } from "./logService";

axios.defaults.baseURL =
  process.env !== "production"
    ? "http://localhost:3900/api"
    : "https://shrouded-river-68402.herokuapp.com/api";

console.log(process.env.REACT_APP_API_URL);

export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (!expectedError) {
    log(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
