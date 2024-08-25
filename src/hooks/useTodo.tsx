import React from "react";
import TodoContext from "../contexts/todoContext";
import {
  addData,
  deleteData,
  getData,
  Stores,
  updateData,
} from "../services/db";
import { ITodo } from "../types/todo.interface";

const useTodo = (props: { isShow: boolean } = { isShow: false }) => {
  const { isShow } = props;
  const { setTodos, setShowNewField, setIsLoading } =
    React.useContext(TodoContext);

  const handleGetTodos = async () => {
    try {
      const res = await getData<ITodo>(Stores.Todos);
      const descendingRes: ITodo[] = [];
      res.forEach((item) => {
        descendingRes.unshift(item);
      });
      setTodos(descendingRes);
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Something went wrong");
      }
    }
  };

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as typeof e.target & {
      title: { value: string };
      taskDate: { value: Date };
      description: { value: string };
    };

    const id =
      Math.floor(Math.random() * 1000).toString() + Date.now().toString();
    const title = form.title.value;
    const date = form.taskDate.value;
    const description = form.description.value;
    const isCompleted = false;

    try {
      await addData(Stores.Todos, {
        id,
        title,
        date,
        description,
        isCompleted,
      });

      handleGetTodos();
      setShowNewField(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Something went wrong");
      }
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteData(Stores.Todos, id);
      handleGetTodos();
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Something went wrong");
      }
    }
  };

  const handleUpdateTodo = async (data: ITodo) => {
    try {
      await updateData(Stores.Todos, data);
      handleGetTodos();
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Something went wrong");
      }
    }
  };

  const handleClickTag = (data: ITodo, tag: string) => {
    handleUpdateTodo({
      ...data,
      tags:
        data.tags !== undefined && data.tags.includes(tag)
          ? data.tags.filter((item) => item !== tag)
          : [...(data.tags ?? []), tag],
    });
  };

  React.useEffect(() => {
    handleGetTodos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  return { handleAddTodo, handleDeleteTodo, handleUpdateTodo, handleClickTag };
};

export default useTodo;
