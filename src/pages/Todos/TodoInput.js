import React, { useEffect, useRef } from "react";
import useCreateTodo from "./hooks/useCreateTodo";
import useGetTodos from "./hooks/useGetTodos";

export default function TodoInput({ todo, setTodo }) {
  const { getTodoList } = useGetTodos();
  const inputRef = useRef(null);

  const { isSuccess, createTodo } = useCreateTodo();
  const handleCreateTodo = async (e) => {
    e.preventDefault();

    createTodo(todo);
    inputRef.current?.blur();
  };

  useEffect(() => {
    if (isSuccess) {
      setTodo("");
      getTodoList();
    }
  }, [isSuccess]);

  return (
    <form onSubmit={(e) => handleCreateTodo(e)}>
      <input
        ref={inputRef}
        type="input"
        placeholder="make a todo list"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}
