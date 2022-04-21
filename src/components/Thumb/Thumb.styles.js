import styled from "styled-components";

export const Wrapper = styled.div`
  height: 250px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
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
