import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import useGetTodos from "./hooks/useGetTodos";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Container = styled.div`
  width: 100%;
`;

const NoListText = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${(props) => theme.color.primary300}; ;
`;
export default function Todos() {
  const { isLoading, todos, getTodoList } = useGetTodos();
  const [todo, setTodo] = useState("");

  return (
    <Container>
      {!isLoading && (
        <>
          <TodoInput todo={todo} setTodo={setTodo} getTodoList={getTodoList} />
          {todos.length > 0 ? (
            <>
              {todos.map((todo) => (
                <TodoList key={todo.id} todo={todo} getTodoList={getTodoList} />
              ))}
            </>
          ) : (
            <NoListText>작성된 to do list 가 없습니다</NoListText>
          )}
        </>
      )}
    </Container>
  );
}
