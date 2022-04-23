import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { isPersistedState } from "../../helper";
import BreadCrumb from "../BreadCrumb";
// custom hook

import GifInfo from "../GifInfo";
import { Content } from "./Gif.styles";
const Gif = ({ searchTerm }) => {
  const { gifId } = useParams();
  console.log(gifId);

  const gifs = isPersistedState(searchTerm);
  let gif = gifs.find((gif) => gif.id === gifId);

  return (
    <>
      <BreadCrumb gifTitle={gif.title} />
      <GifInfo gif={gif} />
    </>
  );
};

export default Gif;
