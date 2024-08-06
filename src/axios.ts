import axios, { AxiosInstance } from 'axios';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

class API {

  private axiosInstance: AxiosInstance;
  private authHeader;
  private baseUrl: string = import.meta.env.VITE_API_URL;

  constructor() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    this.authHeader = useAuthHeader();
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Authorization': this.authHeader
      }
    });
  }

  public async get(path: string) {
    try {
      const response = await this.axiosInstance.get(`${path}`);
      return response;
    } catch (error) {
      console.error('GET request failed:', error);
      throw error;
    }
  }

  public async post(path: string, data: FormData | object) {
    try {
      if (data instanceof FormData) {
        const response = await this.axiosInstance.post(`${path}`, data , {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return response;
      }

      const response = await this.axiosInstance.post(`${path}`, data);
      return response;

    } catch (error) {
      console.error('POST request failed:', error);
      throw error;
    }
  }

  public async put(path: string, data: FormData | object) {
    try {
      const response = await this.axiosInstance.put(`${path}`, data);
      return response;
    } catch (error) {
      console.error('PUT request failed:', error);
      throw error;
    }
  }

  public async delete(path: string) {
    try {
      const response = await this.axiosInstance.delete(`${path}`,);
      return response;
    } catch (error) {
      console.error('DELETE request failed:', error);
      throw error;
    }
  }
}

export const useAPI = () => {
  return new API();
};

export default API;