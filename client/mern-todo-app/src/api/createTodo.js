import axios from 'axios';

const createTodo = async ({ userId, todoText, dispatch }) => {
  const url = 'http://localhost:5000/api/todos';
  try {
    const response = await axios.post(url, { contents: todoText, userId });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default createTodo;
