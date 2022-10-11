import React from "react";
import styled from "styled-components";

const TodoList = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 6rem);
  margin: 0 auto;
  padding: 1rem;
`;

const TodoForm = styled.form`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin-top: 1rem;
  background-color: lightseagreen;
  transition: 0.2s;
`;

const TodoText = styled.span`
  flex: 1;
  width: 80px;
  padding: 0.4rem 0.8rem;
  border: none;
  font-size: 1.2rem;
  background-color: transparent;
  word-break: break-word;
  text-align: left;
`;

const TodoEditInput = styled.input`
  flex: 1;
  padding: 0.4rem 0.8rem;
  border: none;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.2);
`;

export default function TodoItem({
  todo,
  editMode,
  editText,
  setEditText,
  setEditMode,
  handleEdit,
  updateTodoChange,
  updateTodoDone,
  removeTodo,
}) {
  return (
    <TodoList>
      {todo.isCompleted ? <span>완료</span> : <span>미완료</span>}
      <TodoForm
        onSubmit={(e) => updateTodoChange(e, todo.id, todo.isCompleted)}
      >
        {editMode && (
          <>
            <TodoEditInput
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button
              type="sumbit"
              // onClick={() => updateTodoChange(todo.id, todo.isCompleted)}
            >
              제출
            </button>
            <button
              onClick={() => {
                setEditMode(false);
                setEditText("");
              }}
            >
              취소
            </button>
          </>
        )}

        {!editMode && (
          <>
            <TodoText>{todo.todo}</TodoText>
            <button onClick={(e) => handleEdit(e, todo.todo)}>수정</button>
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
            <button
              onClick={() =>
                updateTodoDone(todo.id, todo.isCompleted, todo.todo)
              }
            >
              완료
            </button>
          </>
        )}
      </TodoForm>
    </TodoList>
  );
}
