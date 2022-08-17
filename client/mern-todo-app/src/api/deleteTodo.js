import axios from 'axios';

const deleteTodo = async ({ todoId, userId, dispatch }) => {
  const url = 'https://alyan-todo-list-api.herokuapp.com/api/todos';
  try {
    await axios.delete(url, { data: { userId, todoId } });
    dispatch({ type: 'DELETE_TODO', payload: { todoId } });

    dispatch({
      type: 'SET_SNACKBAR',
      payload: {
        isSnackbarShowing: true,
        snackbarMessage: 'Task Deleted',
        snackbarSeverity: 'error',
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'SET_SNACKBAR',
      payload: {
        isSnackbarShowing: true,
        snackbarMessage: 'There was an issue',
        snackbarSeverity: 'error',
      },
    });
  }
};

export default deleteTodo;
