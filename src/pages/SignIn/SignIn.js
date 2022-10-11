import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthentication from "./hooks/useAuthentication";
import styled from "styled-components";
import { REG_EXP } from "../../utils/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  position: relative;
  align-items: center;
`;

export default function SignIn() {
  const [isValid, setIsValid] = useState(false);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { signUp, signIn, isSuccess, token, isError, errorMessage } =
    useAuthentication(login);

  // 유효성검사
  useEffect(() => {
    if (REG_EXP.test(login.email) && login.password.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [login]);

  useEffect(() => {
    if (isSuccess && token) {
      localStorage.setItem("access_token", token);
      navigate("/todos");
    }
  }, [isSuccess]);

  return (
    <Container>
      {!signup ? <p>로그인</p> : <p>회원가입</p>}
      <hr />
      또는
      <button onClick={() => setSignup((prv) => !prv)}>
        {signup ? <p>로그인</p> : <p>회원가입</p>}
      </button>
      <hr />
      <SignInForm
        onSubmit={signup ? (e) => signUp(e, login) : (e) => signIn(e, login)}
      >
        <label>이메일</label>
        <input
          name="email"
          type="email"
          placeholder="이메일주소"
          onChange={(e) =>
            setLogin({ ...login, [e.target.name]: e.target.value })
          }
        />
        <label>비밀번호</label>
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={(e) =>
            setLogin({ ...login, [e.target.name]: e.target.value })
          }
        />
        {!isValid &&
          "이메일 형식과 비밀번호 자리를 확인해 주세요(비밀번호 8자리 이상)"}
        {isError && <p>{errorMessage}</p>}
        <button disabled={!isValid} type="sumbit">
          {signup ? "회원가입" : "로그인"}
        </button>
      </SignInForm>
    </Container>
  );
}
