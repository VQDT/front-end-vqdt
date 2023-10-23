import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json', 
  },
});

instance.interceptors.request.use((config)=> {
  const token = sessionStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
})

export default instance;