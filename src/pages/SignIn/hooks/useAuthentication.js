import { useState } from "react";
import { postTodo } from "../../../utils/hooks/api";

export default function useAuthentication() {
  const [token, setToken] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const signUp = async (e, login) => {
    e.preventDefault();
    setIsSuccess(false);

    const response = await postTodo({ url: "/auth/signup", data: login });
    if (response?.access_token) {
      setToken(response.access_token);
      setIsSuccess(true);
    }
    if (!response?.access_token) {
      setIsError(true);
      setErrorMessage(response?.response?.data?.message);
    }
  };

  // signin function
  const signIn = async (e, login) => {
    e.preventDefault();
    setIsSuccess(false);

    const response = await postTodo({ url: "/auth/signin", data: login });
    if (response?.access_token) {
      setToken(response.access_token);
      setIsSuccess(true);
    }
    if (!response?.access_token) {
      setIsError(true);
      setErrorMessage(response?.response?.data?.message);
    }
  };

  return { signUp, signIn, isSuccess, token, isError, errorMessage };
}
