import React, { useState } from "react";
import styled from "styled-components";
import useGetTodos from "./hooks/useGetTodos";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Container = styled.div`
  width: 100%;
`;

export default function Todos() {
  const { isLoading, todos } = useGetTodos();
  const [todo, setTodo] = useState("");

  return (
    <Container>
      {!isLoading && (
        <>
          <TodoInput todo={todo} setTodo={setTodo} />
          {todos.length > 0 ? (
            <>
              {todos.map((todo) => (
                <TodoList key={todo.id} todo={todo} />
              ))}
            </>
          ) : (
            <p>작성된 to do list 가 없습니다</p>
          )}
        </>
      )}
    </Container>
  );
}
