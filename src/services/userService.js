import http from "./httpService";
import config from "./config.json";

export async function Register(user) {
  return await http.post(`${config.apiEndPoint}/users`, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
