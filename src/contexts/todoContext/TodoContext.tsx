import React from "react";
import { ITodo } from "../../types/todo.interface";
import TodoContext from ".";

type TodoProviderProps = {
  children: React.ReactNode;
};

export const TodoProvider: React.FC<TodoProviderProps> = (props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [todo, setTodo] = React.useState<ITodo | null>(null);
  const [showNewField, setShowNewField] = React.useState<boolean>(false);

  return (
    <TodoContext.Provider
      value={{
        isLoading,
        setIsLoading,
        todo,
        setTodo,
        todos,
        setTodos,
        showNewField,
        setShowNewField,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
