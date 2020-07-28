import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "./config.json";

export async function login(email, password) {
  const { data: jwt } = await http.post(`${config.apiEndPoint}/auth`, {
    email,
    password,
  });
  localStorage.setItem("token", jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
