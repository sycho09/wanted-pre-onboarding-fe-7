import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import SignIn from "../pages/SignIn/SignIn";
import Todos from "../pages/Todos/Todos";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/todos" element={<Todos />} />
      </Route>
    </Routes>
  );
};
export default Router;
