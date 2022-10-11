import { useState } from "react";
import { postTodo } from "../../../utils/hooks/api";

const useCreateTodo = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const createTodo = async (todo) => {
    setIsSuccess(false);
    const loginToken = localStorage.getItem("access_token");

    const response = await postTodo({
      url: "/todos",
      data: { todo },
      token: loginToken,
    });

    if (response) {
      setIsSuccess(true);
    }
  };

  return { isSuccess, createTodo };
};
export default useCreateTodo;
