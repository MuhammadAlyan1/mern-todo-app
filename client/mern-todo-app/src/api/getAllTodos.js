import axios from 'axios';

const getAllTodos = async ({ userId, dispatch }) => {
  const url =
    'https://mern-todo-app-production.up.railway.app/api/todos/' + userId;
  try {
    const response = await axios.get(url);

    dispatch({ type: 'SET_TODOS', payload: { todos: response.data } });
    dispatch({ type: 'CHANGE_LOADING_STATE' });
  } catch (error) {
    console.log(error);
  }
};

export default getAllTodos;
