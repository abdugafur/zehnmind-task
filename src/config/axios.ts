import axios from "axios";
import { API_BASE_URL, DEFAULT_HEADERS } from "../constants";

export const instanse = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    ...DEFAULT_HEADERS,
  },
});
