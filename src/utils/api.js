import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchSearchResults = async (query) => {
  if (!query) {
    return [];
  }
  const response = await api.get(`/dashboard/search?searchTerm=${query}`);
  return response.data.data;
};