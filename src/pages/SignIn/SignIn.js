import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { REG_EXP } from "../../utils/constants";
import useAuthentication from "./hooks/useAuthentication";
import {
  Container,
  SignInTitle,
  SignInSelection,
  SignInForm,
  SignLabelBox,
  SignInpuxBox,
  FormSelectButton,
  SignInWarning,
  SubmitButton,
} from "./SignInStyles";

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
      <SignInTitle> {!signup ? "로그인" : "회원가입"}</SignInTitle>

      <SignInSelection>
        또는
        <FormSelectButton onClick={() => setSignup((prv) => !prv)}>
          {signup ? <p>로그인</p> : <p>회원가입</p>}
        </FormSelectButton>
      </SignInSelection>
      <SignInForm
        onSubmit={signup ? (e) => signUp(e, login) : (e) => signIn(e, login)}
      >
        <SignLabelBox>E-MAIL</SignLabelBox>
        <SignInpuxBox
          name="email"
          type="email"
          placeholder="이메일주소"
          onChange={(e) =>
            setLogin({ ...login, [e.target.name]: e.target.value })
          }
        />
        <SignLabelBox>PASSWORD</SignLabelBox>
        <SignInpuxBox
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={(e) =>
            setLogin({ ...login, [e.target.name]: e.target.value })
          }
        />
        {!isValid && (
          <SignInWarning>
            이메일 형식과 비밀번호를 확인해 주세요(비밀번호 8자리 이상)
          </SignInWarning>
        )}
        {isError && <p>{errorMessage}</p>}
        <SubmitButton disabled={!isValid} type="sumbit">
          {signup ? "회원가입" : "로그인"}
        </SubmitButton>
      </SignInForm>
    </Container>
  );
}
