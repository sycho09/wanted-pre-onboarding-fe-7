import { TODO_API } from "../axios";

export const postTodo = async ({ url, data, token }) => {
  try {
    const response = await TODO_API.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getTodos = async ({ url, token }) => {
  try {
    const response = await TODO_API.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const putTodo = async ({ url, token, data }) => {
  try {
    const response = await TODO_API.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteTodo = async ({ url, token }) => {
  try {
    const response = await TODO_API.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};
