import axios from 'axios';

const api = axios.create({
    baseURL: 'http://http://127.0.0.1/api',
});

export default api;
