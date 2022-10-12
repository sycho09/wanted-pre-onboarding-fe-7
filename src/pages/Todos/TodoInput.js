import React, { useEffect, useRef } from "react";
import useCreateTodo from "./hooks/useCreateTodo";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const InputContainer = styled.form`
  display: flex;
  width: calc(100% - 4rem);
  padding-top: 20px;
  position: relative;
  margin: 0 auto 1rem;
  align-items: center;
`;

const InputBox = styled.input`
  width: 100%;
  border-radius: 50px;
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
  border: 2px solid ${(props) => theme.color.primary300};
  transition: 0.2s;
  &:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.4);
    outline: none;
  }
`;

const InputButton = styled.button`
  position: absolute;
  width: 80px;
  height: 40px;
  margin: 0.8rem 0.4rem;
  border-radius: 50px;
  right: 0;
  border: none;
  font-size: 1rem;
  background-color: ${(props) => theme.color.primary300};
  color: #fff;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => theme.color.primary100};
  }
  &:active {
    transform: scale(0.8);
  }
`;

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
