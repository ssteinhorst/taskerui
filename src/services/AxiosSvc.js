import axios from 'axios';

// Create a new Axios instance with a base URL
const AxiosSvc = axios.create({
  baseURL: 'https://localhost:7017', 
});

export default AxiosSvc;
