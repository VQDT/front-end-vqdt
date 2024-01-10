import { Role, sessionUser } from "../../models/User";

export function saveUserSessionStorage(user: sessionUser) {
  sessionStorage.setItem("u", JSON.stringify(user));
}

export function saveCurrentRoleSessionStorage(role: Role) {
  sessionStorage.setItem("r",JSON.stringify(role));
}

export function saveTokenSessinStorage(token: string) {
  sessionStorage.setItem("token",token);
}

export function getUserSessionStorage() {
  return sessionStorage.getItem("u");
}

export function getTokenSessionStorage() {
  return sessionStorage.getItem("token");
}

export function getCurrentRoleSessionStorage(){
  return sessionStorage.getItem("r");
}

export function deleteUserSessionStorage() {
  sessionStorage.removeItem("u");
}

export function deleteTokenSessinStorage() {
  sessionStorage.removeItem("token");
}

export function deleteCurrentRoleSessionStorage(){
  sessionStorage.removeItem("r")
}