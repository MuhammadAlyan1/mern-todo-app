const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOGIN_USER': {
      const { userId } = payload;
      return {
        ...state,
        userId,
      };
    }

    case 'REGISTER_USER': {
      const { userId } = payload;
      return {
        ...state,
        userId,
      };
    }

    case 'SET_TODOS': {
      const { todos } = payload;
      return {
        ...state,
        listOfTodos: [...todos],
      };
    }

    case 'ADD_NEW_TODO': {
      const { newTodo } = payload;
      return {
        ...state,
        listOfTodos: [...state.listOfTodos, newTodo],
      };
    }

    case 'UPDATE_TODO': {
      const { updatedTodo } = payload;
      const { _id } = updatedTodo;
      const newListOfTodos = state.listOfTodos.map((todo) => {
        if (_id === todo._id) {
          return updatedTodo;
        }
        return todo;
      });

      return {
        ...state,
        listOfTodos: [...newListOfTodos],
      };
    }

    case 'DELETE_TODO': {
      const { todoId } = payload;
      const newTodoList = state.listOfTodos.filter(
        (todo) => todo._id !== todoId
      );
      return {
        ...state,
        listOfTodos: [...newTodoList],
      };
    }

    case 'SET_SNACKBAR': {
      const { isSnackbarShowing, snackbarMessage, snackbarSeverity } = payload;
      return {
        ...state,
        isSnackbarShowing,
        snackbarMessage,
        snackbarSeverity,
      };
    }

    case 'HIDE_SNACKBAR': {
      return {
        ...state,
        isSnackbarShowing: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
