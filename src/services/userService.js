import http from "./httpService";

export async function Register(user) {
  return await http.post(`/users`, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
