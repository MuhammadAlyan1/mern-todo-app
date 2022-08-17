import React, { useState, useContext } from 'react';
import { todoAppContext } from '../../../App';
import ShowSnackbar from '../../../components/ShowSnackbar';
import CreateTodoFloatingButton from './CreateTodoFloatingButton';
import CreateTodoModal from './CreateTodoModal';

const CreateTodo = () => {
  const {
    state: { isSnackbarShowing },
  } = useContext(todoAppContext);
  const [isTodoModalShowing, setIsTodoModalShowing] = useState(false);

  return (
    <>
      <CreateTodoFloatingButton
        isTodoModalShowing={isTodoModalShowing}
        setIsTodoModalShowing={setIsTodoModalShowing}
      />

      <CreateTodoModal
        isTodoModalShowing={isTodoModalShowing}
        setIsTodoModalShowing={setIsTodoModalShowing}
      />

      {isSnackbarShowing && <ShowSnackbar />}
    </>
  );
};

export default CreateTodo;
