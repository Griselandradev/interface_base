import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nationalize.io'
});

// Función para predecir la nacionalidad
export const getNationality = (name) => api.get('/', { params: { name } });

export default api;
