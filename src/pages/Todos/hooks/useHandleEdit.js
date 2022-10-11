import { useState } from "react";

export default function useHandleEdit() {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState("");

  const handleEdit = (e, todo) => {
    e.preventDefault();
    setEditMode(true);
    setEditText(todo);
  };
  return { editMode, setEditMode, editText, setEditText, handleEdit };
}
