import axios from 'axios';

const brapiApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BRAPI_URL,
  params:{
    token:process.env.NEXT_PUBLIC_BRAPI_TOKEN
  }
});

export default brapiApi;