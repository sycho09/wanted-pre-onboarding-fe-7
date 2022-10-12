import styled from "styled-components";
import { theme } from "../../styles/theme";
import DefaultButton from "../../components/Button";

export const Container = styled.div`
  width: 100%;
`;

export const NoListText = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${(props) => theme.color.primary300}; ;
`;

export const TodoListTable = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 6rem);
  margin: 0 auto;
  padding: 0.2rem;
`;

export const TodoContent = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin-top: 0.4rem;
  background-color: ${(props) => theme.color.secondary};
  transition: 0.2s;
`;

export const TodoText = styled.span`
  flex: 1;
  width: 80px;
  padding: 0.4rem 0.8rem;
  border: none;
  font-size: 1.2rem;
  background-color: transparent;
  word-break: break-word;
  text-align: left;
`;

export const TodoEditInput = styled.input`
  flex: 1;
  padding: 0.4rem 0.8rem;
  border: none;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const GreyButton = styled(DefaultButton)`
  margin-left: 0.4rem;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  border: none;
  font-size: 0.9rem;
  background-color: #f2f2f2;
  color: #858585;
  transition: 0.2s;
  &:hover {
    background-color: white;
  }
  &:active {
    transform: scale(0.9);
  }
`;
export const TodoButton = styled(DefaultButton)`
  margin-left: 0.4rem;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  border: none;
  font-size: 0.9rem;
  color: #fff;
  background-color: ${(props) =>
    props.children === "미완료" ? "#858585" : theme.color.primary300};
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => theme.color.primary100};
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const InputContainer = styled.form`
  display: flex;
  width: calc(100% - 4rem);
  padding-top: 20px;
  position: relative;
  margin: 0 auto 1rem;
  align-items: center;
`;

export const InputBox = styled.input`
  width: 100%;
  border-radius: 50px;
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
  border: 2px solid ${(props) => theme.color.primary300};
  transition: 0.2s;
  &:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.4);
    outline: none;
  }
`;

export const InputButton = styled.button`
  position: absolute;
  width: 80px;
  height: 40px;
  margin: 0.8rem 0.4rem;
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
