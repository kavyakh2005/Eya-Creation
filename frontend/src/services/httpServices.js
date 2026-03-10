import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE_URL

const axiosInstance = axios.create({
  baseURL: API_BASE,
  timeout: 50000,
  withCredentials:true,
});


export default axiosInstance;