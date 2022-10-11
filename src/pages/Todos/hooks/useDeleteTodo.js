import { useState } from "react";
import { deleteTodo } from "../../../utils/hooks/api";

export default function useDeleteTodo() {
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const deleteTodoItem = async (id) => {
    const loginToken = localStorage.getItem("access_token");

    const response = await deleteTodo({
      url: `/todos/${id}`,
      token: loginToken,
    });
    if (response) {
      setDeleteSuccess(true);
    }
  };
  return { deleteSuccess, deleteTodoItem };
}
