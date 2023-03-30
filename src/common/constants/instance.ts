import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': 'c0710259-5cca-4d98-b52b-25b1ce53913e',
  },
});