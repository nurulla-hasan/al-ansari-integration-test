import axios from "axios";

export const baseURL = "https://backend.alansarilaw.com";

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
