import {LOGIN_ENDPOINT} from "./const";
import axios from "axios";

export async function login(credentials) {
  try {
    const response = await axios.post(LOGIN_ENDPOINT, credentials);
    return response
  } catch (error) {
    console.error(error);
    throw new Error("an error occured");
  }
}