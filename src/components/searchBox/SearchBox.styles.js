import styled from "styled-components";

export const Content = styled.div`
  width: 50%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  /* margin: 0 5px; */
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  @media screen and (max-width: 425px) {
    margin: 0;
    width: 100%;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  text-indent: 5px;
  font-family: "Open Sans", sans-serif;
  border-radius: 7px;
  background-color: #222;
  border: 1px solid #424242;
  color: #fff;
`;
export const ButtonContainer = styled.div``;
export const SearchButton = styled.button`
  padding: 10px;
  outline: none;
  height: 100%;
  background-color: #00acee;
  color: #f5f5f5;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid rgba(0, 0, 0, 0.46);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.46);
  font-family: "Open Sans", sans-serif;
  &:active {
    border: none;
    box-shadow: none;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
