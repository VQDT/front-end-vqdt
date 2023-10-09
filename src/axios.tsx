import axios from 'axios';

// Crie uma instância do Axios com configurações personalizadas, se necessário
const instance = axios.create({
  baseURL: 'http://localhost:3001', // URL base da API
  timeout: 5000, // Tempo limite para as solicitações (ms)
  headers: {
    'Content-Type': 'application/json', // Tipo de conteúdo padrão para as solicitações
  },
});

export default instance;