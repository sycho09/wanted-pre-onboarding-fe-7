import React from "react";
import styled from "styled-components";
const DefaultButton = styled.button`
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  border: none;
`;

export default function Button({ ...props }) {
  return <DefaultButton {...props}>{props.children}</DefaultButton>;
}
