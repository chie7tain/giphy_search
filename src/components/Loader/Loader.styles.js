import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f5f5f5;
  border-top: 5px solid #222;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  transform: rotate(0deg);
  animation: loading 500mx ease-in-out;
  -webkit-animation: loading 500ms ease-in-out infinite;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
