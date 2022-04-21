import React from "react";

import { Wrapper, Content, Text, Header } from "./GifInfo.styles";

const GifInfo = ({ gif }) => (
  <Wrapper>
    <Content>
      <Header>
        <Text>{gif.title}</Text>
      </Header>
      <img src={gif.images.original.url} alt="gif" />
    </Content>
  </Wrapper>
);

export default GifInfo
