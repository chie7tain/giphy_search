import React from "react";

import { useState } from "react";
import "../../App.css";

import API from "../../helpers/API";
import Loader from "../Loader";
import Thumb from "../Thumb";
import {
  Content,
  InputContainer,
  ButtonContainer,
  Input,
  SearchButton,
} from "./SearchBox.styles";

export const SearchBox = ({
  searchTerm,
  handleSearch,
  setSearchTerm,
  isError,
  isLoading,
  gifs,
}) => {
  return (
    <>
      {/* <div className="header"> */}
      <Content>
        <InputContainer>
          <Input
            type="text"
            placeholder="Search for a gif"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => (e.code === "Enter" ? handleSearch(e) : null)}
          />
        </InputContainer>
        <ButtonContainer>
          <SearchButton className="search_btn" onClick={handleSearch}>
            Search
          </SearchButton>
        </ButtonContainer>
      </Content>
      {/* </div> */}

      <div className="result">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div className="error">
            <p>Something went wrong</p>
          </div>
        ) : (
          <div className="list">
            {gifs.map((gif) => (
              <Thumb
                key={gif.id}
                image={gif.images.downsized_medium.url}
                gifId={gif.id}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
