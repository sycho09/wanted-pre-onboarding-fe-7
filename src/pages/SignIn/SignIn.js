import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { REG_EXP } from "../../utils/constants";
import useAuthentication from "./hooks/useAuthentication";
import DefaultButton from "../../components/Button";
import { theme } from "../../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignInTitle = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
  color: ${(props) => theme.color.primary300};
`;

const SignInSelection = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  position: relative;
  align-items: flex-start;
  background-color: rgba(123, 104, 238, 0.1);
  padding: 2rem;
  border-radius: 10px;
`;

const SignLabelBox = styled.label`
  color: #858585;
  font-size: 0.8rem;
  margin: 1rem 0 0.4rem 0;
`;
const SignInpuxBox = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0.4rem 0.6rem;
  font-size: 1rem;
  border: 1px solid ${(props) => theme.color.primary300}; ;
`;
const FormSelectButton = styled(DefaultButton)`
  background-color: transparent;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: underline;
  color: #858585;
  cursor: pointer;
`;
const SignInWarning = styled.p`
  font-size: 0.8rem;
  color: #ff6347;
  margin-top: 0.4rem;
`;
const SubmitButton = styled(DefaultButton)`
  width: 100%;
  height: 40px;
  margin: 1.6rem 0 0.8rem;
  border-radius: 50px;
  right: 0;
  border: none;
  font-size: 1rem;
  background-color: ${(props) => theme.color.primary300};
  color: #fff;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => theme.color.primary100};
  }
  &:active {
    transform: scale(0.8);
  }
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
