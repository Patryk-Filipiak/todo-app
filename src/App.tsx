import React from 'react';
import { UserWarning } from './UserWarning';
import { ToDoList } from './components/ToDoList/ToDoList';
import { TodosProvider } from './context/ToDo.context';
import { TodoHeader } from './components/TodoHeader/TodoHeader';
import { ToDoFooter } from './components/ToDoFooter/ToDoFooter';
import { ErrorNotification }
  from './components/ErrorNotification/ErrorNotification';

const USER_ID = 11602;

export const App: React.FC = () => (!USER_ID)
  ? <UserWarning />
  : (
    <TodosProvider userId={USER_ID}>
      <div className="todoapp">
        <h1 className="todoapp__title">todos</h1>

        <div className="todoapp__content">

          <TodoHeader />
          <ToDoList />
          <ToDoFooter />
        </div>

        <ErrorNotification />
      </div>
    </TodosProvider>
  );