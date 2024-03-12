import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

instance.interceptors.request.use((config)=> {
  const token = sessionStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
})

export default instance;