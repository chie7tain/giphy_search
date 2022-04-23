import styled from "styled-components";

export const Wrapper = styled.div``;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const Header = styled.header``;
export const Text = styled.p``;
export const ImageContainer = styled.div`
  margin: 10px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 7px;
`;
