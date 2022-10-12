import React, { useEffect } from "react";
import useUpdateTodo from "./hooks/useUpdateTodo";
import useDeleteTodo from "./hooks/useDeleteTodo";
import useHandleEdit from "./hooks/useHandleEdit";
import TodoItem from "./TodoItem";

export default function TodoList({ todo, getTodoList }) {
  const { updateTodo, editSuccess, updateSuccess } = useUpdateTodo();
  const { deleteTodoItem, deleteSuccess } = useDeleteTodo();
  const { editMode, setEditMode, editText, setEditText, handleEdit } =
    useHandleEdit();

  const updateTodoDone = (id, isCompleted, todo) => {
    updateTodo(
      id,
      {
        todo,
        isCompleted: !isCompleted,
      },
      "update"
    );
    setEditMode(false);
  };

  // submit changes of todo
  const updateTodoChange = (id, isCompleted) => {
    updateTodo(
      id,
      {
        isCompleted,
        todo: editText,
      },
      "edit"
    );
    setEditMode(false);
    setEditText("");
  };

  // submit delete
  const removeTodo = (id) => {
    deleteTodoItem(id);
  };

  useEffect(() => {
    if (updateSuccess) {
      getTodoList();
    }
  }, [updateSuccess]);

  useEffect(() => {
    if (deleteSuccess) {
      getTodoList();
    }
  }, [deleteSuccess]);

  useEffect(() => {
    if (editSuccess) {
      getTodoList();
    }
  }, [editSuccess]);

  return (
    <TodoItem
      todo={todo}
      editMode={editMode}
      editText={editText}
      setEditText={setEditText}
      setEditMode={setEditMode}
      handleEdit={handleEdit}
      updateTodoChange={updateTodoChange}
      updateTodoDone={updateTodoDone}
      removeTodo={removeTodo}
    />
  );
}
