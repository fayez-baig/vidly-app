import jwtDecode from "jwt-decode";
import http, { setJwt } from "./httpService";

setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(`/auth`, {
    email,
    password,
  });
  localStorage.setItem("token", jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function getJwt() {
  return localStorage.getItem("token");
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
