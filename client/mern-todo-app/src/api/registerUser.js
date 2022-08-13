import axios from 'axios';

const registerUser = async (userCredentials, dispatch) => {
  const url = 'http://localhost:5000/user/register';

  try {
    const response = await axios.post(url, userCredentials);
    const { userId } = response.data;

    dispatch({ type: 'REGISTER_USER', payload: { userId } });
    dispatch({
      type: 'SET_SNACKBAR',
      payload: {
        isSnackbarShowing: true,
        snackbarMessage: 'Account created',
        snackbarSeverity: 'success',
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'SET_SNACKBAR',
      payload: {
        isSnackbarShowing: true,
        snackbarMessage: 'Wrong username or password',
        snackbarSeverity: 'error',
      },
    });
  }
};

export default registerUser;
