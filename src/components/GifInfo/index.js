import React from "react";
import Thumb from "../Thumb";
import {
  Wrapper,
  Content,
  Text,
  Header,
  Image,
  ImageContainer,
} from "./GifInfo.styles";

const GifInfo = ({ gif }) => {
  const { title, images, id, rating, source } = gif;
  // const url = images.original.url;
  console.log(gif);
  console.log(images.downsized_large.url);
  const url = images.downsized_large.url;

  return (
    <Wrapper>
      <Content>
        <ImageContainer>
          <Image src={url} alt="gif" />
        </ImageContainer>
        <div>
          <Header>
            <Text>{title}</Text>
          </Header>
          <Text>Rating: {rating}</Text>
          <Text>Source: {source}</Text>
        </div>
      </Content>
    </Wrapper>
  );
};

export default GifInfo;
