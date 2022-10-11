import { useState } from "react";
import { putTodo } from "../../../utils/hooks/api";

export default function useUpdateTodo() {
  const [editSuccess, setEditSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const updateTodo = async (id, data, type) => {
    const loginToken = localStorage.getItem("access_token");
    setUpdateSuccess(false);
    setEditSuccess(false);

    const response = await putTodo({
      url: `/todos/${id}`,
      data,
      token: loginToken,
    });
    if (response && type === "edit") {
      setEditSuccess(true);
    }
    if (response && type === "update") {
      setUpdateSuccess(true);
    }
  };

  return { updateTodo, editSuccess, updateSuccess };
}
