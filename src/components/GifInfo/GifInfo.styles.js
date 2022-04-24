import styled from "styled-components";

export const Wrapper = styled.div``;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  display: flex;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
export const Header = styled.header``;
export const Text = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
`;
export const ImageContainer = styled.div`
  margin: 10px;
  width: 100%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 7px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
