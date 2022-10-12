import React from "react";
import styled from "styled-components";
import DefaultButton from "../../components/Button";
import { theme } from "../../styles/theme";

const TodoList = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 6rem);
  margin: 0 auto;
  padding: 0.2rem;
`;

const TodoContent = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin-top: 0.4rem;
  background-color: ${(props) => theme.color.secondary};
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

const GreyButton = styled(DefaultButton)`
  margin-left: 0.4rem;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  border: none;
  font-size: 0.9rem;
  background-color: #f2f2f2;
  color: #858585;
  transition: 0.2s;
  &:hover {
    background-color: white;
  }
  &:active {
    transform: scale(0.9);
  }
`;
const TodoButton = styled(DefaultButton)`
  margin-left: 0.4rem;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  border: none;
  font-size: 0.9rem;
  background-color: ${(props) => theme.color.primary300};
  color: #fff;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => theme.color.primary100};
  }
  &:active {
    transform: scale(0.9);
  }
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
      <TodoContent>
        {editMode && (
          <>
            <TodoEditInput
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <TodoButton
              type="sumbit"
              onClick={() => updateTodoChange(todo.id, todo.isCompleted)}
            >
              제출
            </TodoButton>
            <GreyButton
              onClick={() => {
                setEditMode(false);
                setEditText("");
              }}
            >
              취소
            </GreyButton>
          </>
        )}

        {!editMode && (
          <>
            <TodoButton
              onClick={() =>
                updateTodoDone(todo.id, todo.isCompleted, todo.todo)
              }
            >
              {todo.isCompleted ? "완료" : "미완료"}
            </TodoButton>
            {todo.isCompleted ? (
              <TodoText>{todo.todo}</TodoText>
            ) : (
              <TodoText>
                <s>{todo.todo}</s>
              </TodoText>
            )}

            <TodoButton onClick={(e) => handleEdit(e, todo.todo)}>
              수정
            </TodoButton>
            <GreyButton onClick={() => removeTodo(todo.id)}>삭제</GreyButton>
          </>
        )}
      </TodoContent>
    </TodoList>
  );
}
