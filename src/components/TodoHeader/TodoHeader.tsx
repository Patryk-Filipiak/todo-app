import { ToggleAllButton } from './ToggleAllButton';
import { AddTodoForm } from './AddTodoForm';
import React from 'react';

export const TodoHeader = () => {
  return (
    <header className="todoapp__header">
      <ToggleAllButton />
      <AddTodoForm />
    </header>
  );
};