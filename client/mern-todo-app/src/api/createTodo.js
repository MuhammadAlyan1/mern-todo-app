import axios from 'axios';

const createTodo = async ({ userId, todoText, dispatch }) => {
  const url = 'http://localhost:5000/api/todos';
  try {
    const response = await axios.post(url, { contents: todoText, userId });

    dispatch({ type: 'ADD_NEW_TODO', payload: { newTodo: response.data } });

    dispatch({
      type: 'SET_SNACKBAR',
      payload: {
        isSnackbarShowing: true,
        snackbarMessage: 'Todo Created',
        snackbarSeverity: 'success',
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'SET_SNACKBAR',
      payload: {
        isSnackbarShowing: true,
        snackbarMessage: 'There was an error',
        snackbarSeverity: 'error',
      },
    });
  }
};

export default createTodo;
