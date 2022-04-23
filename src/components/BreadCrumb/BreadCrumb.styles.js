import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #353535;
  color: #fff;
  margin: 10px;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--max-width);
  padding: 0 20px;
  color: #fff !important;
  Link {
    text-decoration: none;
  }
  span {
    font-size: 1.2rem;
    color: #fff;
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
// maxWidth:1280px
// lightGrey:#eee;
// darkkGrey:#1c1c1c;
// fontSuperBig:2.5rem;
// fontBig:1.5rem;
// fontMed:1.2rem;
// fontSmall:1rem;
