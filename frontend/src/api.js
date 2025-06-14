import axios from 'axios';

const baseURL = import.meta.env.BASE_API_URL || 'http://localhost:4000';

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
