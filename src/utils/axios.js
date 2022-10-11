import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const TODO_API = axios.create({
  baseURL: BASE_URL,
});
