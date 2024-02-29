import axios from 'axios';

const backendApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
});

export default backendApi;