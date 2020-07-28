import http from "./httpService";
import config from "./config.json";

export async function Register(user) {
  const { headers } = await http.post(`${config.apiEndPoint}/users`, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
  localStorage.setItem("token", headers["x-auth-token"]);
}
