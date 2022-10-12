import styled from "styled-components";
import DefaultButton from "../../components/Button";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SignInTitle = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
  color: ${(props) => theme.color.primary300};
`;

export const SignInSelection = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  position: relative;
  align-items: flex-start;
  background-color: rgba(123, 104, 238, 0.1);
  padding: 2rem;
  border-radius: 10px;
`;

export const SignLabelBox = styled.label`
  color: #858585;
  font-size: 0.8rem;
  margin: 1rem 0 0.4rem 0;
`;
export const SignInpuxBox = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0.4rem 0.6rem;
  font-size: 1rem;
  border: 1px solid ${(props) => theme.color.primary300}; ;
`;
export const FormSelectButton = styled(DefaultButton)`
  background-color: transparent;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: underline;
  color: #858585;
  cursor: pointer;
`;
export const SignInWarning = styled.p`
  font-size: 0.8rem;
  color: #ff6347;
  margin-top: 0.4rem;
`;
export const SubmitButton = styled(DefaultButton)`
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
