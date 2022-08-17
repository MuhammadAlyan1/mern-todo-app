import { createContext, useReducer } from 'react';
import reducer from './reducer';
import './App.css';
import LoginPage from './pages/loginPage/index';
import RegisterPage from './pages/registerPage/index';
import TodosPage from './pages/todosPage/index';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const todoAppContext = createContext();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const defaultValues = {
    userId: '',
    listOfTodos: [],
    isTodosLoading: true,
    isSnackbarShowing: false,
    snackbarMessage: '',
    snackbarSeverity: '',
  };

  const [state, dispatch] = useReducer(reducer, defaultValues);

  return (
    <todoAppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="mern-todo-app/" element={<LoginPage />} />
              <Route path="mern-todo-app/register" element={<RegisterPage />} />
              <Route path="mern-todo-app/todosPage" element={<TodosPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </todoAppContext.Provider>
  );
}

export default App;
