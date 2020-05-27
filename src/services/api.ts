import axios from 'axios';
// Be careful!
// this api will only accept 100 requisitions per hour because we are not authenticated.
const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
