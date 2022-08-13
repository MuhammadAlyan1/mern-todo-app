import { createContext, useReducer } from 'react';
import reducer from './reducer';
import './App.css';
import LoginPage from './pages/loginPage/index';
import RegisterPage from './pages/registerPage/index';
import TodosPage from './pages/todosPage/index';

export const todoAppContext = createContext();

function App() {
  const defaultValues = {
    userId: '62f7c994a518c7756bf8a63e',
    listOfTodos: [],
    isSnackbarShowing: '',
    snackbarMessage: '',
    snackbarSeverity: '',
  };

  const [state, dispatch] = useReducer(reducer, defaultValues);

  return (
    <todoAppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <TodosPage />
      </div>
    </todoAppContext.Provider>
  );
}

export default App;
