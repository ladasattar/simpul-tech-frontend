import React from "react";
import { ITodo } from "../../types/todo.interface";

interface ITodoContext {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  todo: ITodo | null;
  setTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  showNewField: boolean;
  setShowNewField: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoContext = React.createContext<ITodoContext>({} as ITodoContext);

export default TodoContext;
