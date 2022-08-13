import axios from 'axios';

const loginUser = async (userCredentials, dispatch) => {
  const url = 'http://localhost:5000/user/login';

  try {
    const response = await axios.post(url, userCredentials);
    const { userId } = response.data;

    dispatch({ type: 'LOGIN_USER', payload: { userId } });
    dispatch({
      type: 'SET_SNACKBAR',
      payload: {
        isSnackbarShowing: true,
        snackbarMessage: 'Logged in',
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

export default loginUser;
