import React from "react";
import useTodo from "../../hooks/useTodo";
import Loading from "../../molecules/Loading";
import TodoRow from "../../molecules/TodoRow";
import AddTodoRow from "../../molecules/AddTodoRow";
import TodoContext from "../../contexts/todoContext";
import CardBase from "../../components/cards/CardBase";
import TodoHeader from "../../organisms/Todo/TodoHeader";

interface ITodo {
  isShow: boolean;
}

const Todo: React.FC<ITodo> = (props) => {
  const { isShow } = props;
  const { todos, showNewField, isLoading } = React.useContext(TodoContext);
  // eslint-disable-next-line no-empty-pattern
  const {} = useTodo({ isShow });

  return (
    <div
      className={`absolute right-[34px] transition-all duration-300 ${
        isShow
          ? "opacity-100 visible bottom-[110px]"
          : "opacity-0 invisible bottom-24"
      }`}
    >
      <CardBase extra="!py-0">
        <TodoHeader />
        {!isLoading ? (
          todos.length > 0 ? (
            todos.map((todo, index) => (
              <div
                key={index}
                className={`w-full ${
                  index === todos.length - 1 && !showNewField ? "mb-10" : ""
                }`}
              >
                <TodoRow
                  id={todo.id}
                  title={todo.title}
                  date={new Date(todo.date)}
                  isCompleted={todo.isCompleted}
                  description={todo?.description}
                  tags={todo?.tags}
                />
                {index !== todos.length - 1 && (
                  <hr className="border-gray-light mx-8 my-5" />
                )}
              </div>
            ))
          ) : null
        ) : (
          <Loading text="Loading Task List ..." />
        )}
        {showNewField ? (
          <>
            {todos.length > 0 ? (
              <hr className="border-gray-light mx-8 my-5" />
            ) : (
              <></>
            )}
            <AddTodoRow />
          </>
        ) : (
          <></>
        )}
      </CardBase>
    </div>
  );
};

export default Todo;
