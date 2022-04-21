import React from "react";

import { Wrapper, Image } from "./Thumb.styles";

const Thumb = ({ image, gifId, clickable }) => (
  <>
    {clickable ? (
      <Wrapper>
        <Image
          src={image}
          alt={gifId}
          onClick={() => {
            window.location.href = `/gif/${gifId}`;
          }}
        />
      </Wrapper>
    ) : (
      <Wrapper>
        <Image src={image} alt="gif thumb" />
      </Wrapper>
    )}
  </>
);
export default Thumb;
