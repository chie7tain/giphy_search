import React from "react";
import Loader from "../Loader";
import Thumb from "../Thumb";
import { Wrapper, Content } from "./ResultList.styles";

const ResultList = ({ gifs, isLoading, isError }) => {
  return (
    <Wrapper>
      <Content className="list">
        {gifs.map((gif) => (
          <Thumb
            key={gif.id}
            image={gif.images.downsized_medium.url}
            gifId={gif.id}
          />
        ))}
      </Content>
    </Wrapper>
  );
};
export default ResultList;
