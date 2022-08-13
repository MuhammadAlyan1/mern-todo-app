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
