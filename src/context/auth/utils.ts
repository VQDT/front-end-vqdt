import { sessionUser } from "../../models";

export function saveUserSessionStorage(user: sessionUser) {
  sessionStorage.setItem("u", JSON.stringify(user));
}

export function getUserSessionStorage() {
  return sessionStorage.getItem("u");
}

export function getTokenSessionStorage() {
  return sessionStorage.getItem("token");
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