import React, { useEffect, useRef } from "react";
import useCreateTodo from "./hooks/useCreateTodo";
import { InputContainer, InputBox, InputButton } from "./TodoStyles";

export default function TodoInput({ todo, setTodo, getTodoList }) {
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
    <InputContainer onSubmit={(e) => handleCreateTodo(e)}>
      <InputBox
        ref={inputRef}
        type="input"
        placeholder="Write down today's task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <InputButton>add</InputButton>
    </InputContainer>
  );
}
