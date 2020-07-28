import http from "./httpService";
import config from "./config.json";

export async function login(email, password) {
  const { data: jwt } = await http.post(`${config.apiEndPoint}/auth`, {
    email,
    password,
  });
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}
