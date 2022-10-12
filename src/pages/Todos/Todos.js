import React, { useState } from "react";
import useGetTodos from "./hooks/useGetTodos";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Container, NoListText } from "./TodoStyles";

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
