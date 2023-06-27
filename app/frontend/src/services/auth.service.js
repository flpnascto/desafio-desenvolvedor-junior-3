import axios from 'axios';
import { API_ENDPOINTS } from './utils';

const signIn = async (login) => {
  const options = {
    method: 'post',
    url: API_ENDPOINTS.LOGIN,
    data: {...login},
  };

  try {
    const request = await axios(options)
    return { token: request.data.token }
  } catch (error) {
    return { ...error.response.data }
  }
}

export default {
  signIn
}