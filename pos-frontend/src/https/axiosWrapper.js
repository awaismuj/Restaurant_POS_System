import axios from "axios";

const defaultHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const backendBaseURL =
  import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_API_URL || "";

export const axiosWrapper = axios.create({
  baseURL: backendBaseURL,
  withCredentials: true,
  headers: { ...defaultHeader },
});
