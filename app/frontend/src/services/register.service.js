import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const register = async (newUser) => {
  const { firstName, lastName, email, password } = newUser;
  const options = {
    method: 'post',
    url: `${baseUrl}/register`,
    data: {...newUser},
  };

  let message = '';
  let success = false;

  try {
    const request = await axios(options)
    success = request.status === 201 ? true : false;
    message = `Bem vindo ${firstName} ${lastName}!`
  } catch (error) {
    const messageError = JSON.parse(error.response.data)
    message = messageError.message
  }
  return { success, message }
}

export default {
  register
}
