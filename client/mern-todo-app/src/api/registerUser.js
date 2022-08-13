import axios from 'axios';

const registerUser = async (userCredentials, dispatch) => {
  const url = 'http://localhost:5000/user/register';

  try {
    const response = await axios.post(url, userCredentials);
    const { userId } = response.data;

    dispatch({ type: 'REGISTER_USER', payload: { userId } });
  } catch (error) {
    throw new Error(error);
  }
};

export default registerUser;
