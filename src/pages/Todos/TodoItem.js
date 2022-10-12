import React from "react";
import {
  TodoListTable,
  TodoContent,
  TodoText,
  TodoEditInput,
  GreyButton,
  TodoButton,
} from "./TodoStyles";

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
    <TodoListTable>
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
              <TodoText>
                <s>{todo.todo}</s>
              </TodoText>
            ) : (
              <TodoText>{todo.todo}</TodoText>
            )}

            <TodoButton onClick={(e) => handleEdit(e, todo.todo)}>
              수정
            </TodoButton>
            <GreyButton onClick={() => removeTodo(todo.id)}>삭제</GreyButton>
          </>
        )}
      </TodoContent>
    </TodoListTable>
  );
}
