import axios from "axios";
import type { IBreedResponse } from "../types";
import { API_BASE_URL, DEFAULT_HEADERS } from "../constants";

export const instanse = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    ...DEFAULT_HEADERS,
  },
});

export const appApi = {
  getBreeds: async (params: {
    "page[number]": number;
    "page[siz]": number;
  }): Promise<IBreedResponse> => {
    const res = await instanse.get("/breeds", { params });
    return res.data;
  },
};
