import {LOGIN_ENDPOINT} from "./const";
import axios from "axios";

export async function login(credentials) {
  try {
    const response = await axios.post(LOGIN_ENDPOINT, credentials);
    return response
  } catch (error) {
    throw new Error(error.toString());
  }
}

export async function signup(credentials) {
  try {
    const response = await axios.post(LOGIN_ENDPOINT, credentials);
    return response
  } catch (error) {
    throw new Error(error.toString());
  }
}