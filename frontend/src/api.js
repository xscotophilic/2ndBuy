import axios from 'axios';

const baseURL = import.meta.env.BASE_API_URL || 'http://localhost:4000';

const api = axios.create({
  baseURL,
  withCredentials: true,
});

// Add a response interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        alert('You are not authorized. Please log in.');
        window.location.href = '/';
      } else if (error.response.status === 403) {
        alert('You do not have permission to perform this action.');
      } else if (error.response.status === 404) {
        // Optionally handle 404s globally
      } else if (error.response.status >= 500) {
        alert('A server error occurred. Please try again later.');
      }
    }
    return Promise.reject(error);
  }
);

export default api;
