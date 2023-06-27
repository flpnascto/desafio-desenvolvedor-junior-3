const API_PORT = process.env.API_PORT || '3001';
const API_HOST = process.env.API_HOST || 'localhost';
const API_PROTOCOL = process.env.API_PROTOCOL || 'http';
const API_URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;


const API_ENDPOINTS = {
  LOGIN: `${API_URL}/login`,
  REGISTER: `${API_URL}/register`,
  POSTS: `${API_URL}/post`
}

export {
  API_ENDPOINTS
}