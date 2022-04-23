import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Image } from "./Thumb.styles";

const Thumb = ({ image, gifId }) => (
  <Link to={`/${gifId}`}>
    <Wrapper>
      <Image src={image} alt={gifId} />
    </Wrapper>
  </Link>
);
export default Thumb;
// onClick={() => {
//   window.location.href = `/gif/${gifId}`;
// }}
