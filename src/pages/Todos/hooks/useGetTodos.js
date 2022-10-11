import { useEffect, useState } from "react";
import { getTodos } from "../../../utils/hooks/api";

export default function useGetTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTodoList = async () => {
    const loginToken = localStorage.getItem("access_token");
    if (loginToken) {
      const response = await getTodos({
        url: "/todos",
        token: loginToken,
      });
      if (response) {
        setTodos(response);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return { isLoading, todos, setTodos, getTodoList };
}
