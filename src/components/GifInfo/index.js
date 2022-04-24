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
  const { title, images, id, rating, source,username } = gif;
  const url = images.downsized_large.url;

  return (
    <Wrapper>
      <Content>
        <ImageContainer>
          <Image src={url} alt="gif" />
        </ImageContainer>
        <div>
          <Header>
            <Text>Title: {title}</Text>
          </Header>
          <Text>Rating: {rating}</Text>
          <Text>Source: {source}</Text>
          <Text>Username: {username}</Text>
        </div>
      </Content>
    </Wrapper>
  );
};

export default GifInfo;
