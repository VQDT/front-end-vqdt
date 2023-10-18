import { User } from "../../types";

export function saveUserSessionStorage(user: User) {
  sessionStorage.setItem("u", JSON.stringify(user));
}

export function getUserSessionStorage() {
  return sessionStorage.getItem("u");
}

export function deleteUserSessionStorage() {
  sessionStorage.removeItem("u");
}

export function saveTokenSessinStorage(token: string) {
  sessionStorage.setItem("token",token);
}

export function deleteTokenSessinStorage() {
  sessionStorage.removeItem("token");
}