import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': '4d6d9926-0e7a-48ea-8269-ba2c86428db6',
  },
});