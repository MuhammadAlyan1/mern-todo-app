import axios from 'axios';

const updateTodo = async ({ todoId, todoText, isCompleted, dispatch }) => {
  const url = 'http://localhost:5000/api/todos/';
  try {
    const response = await axios.put(url, {
      todoId,
      contents: todoText,
      isCompleted,
    });
    const { selectedTodo } = response.data;

    dispatch({
      type: 'UPDATE_TODO',
      payload: { updatedTodo: selectedTodo },
    });

    dispatch({
      type: 'SET_SNACKBAR',
      payload: {
        isSnackbarShowing: true,
        snackbarMessage: 'Todo updated',
        snackbarSeverity: 'success',
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

export default updateTodo;
