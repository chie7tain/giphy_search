import React from "react";

import "../../App.css";
import ResultList from "../ResultList/ResultList";
import Loader from "../Loader";
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
          <SearchButton
            className="search_btn"
            onClick={handleSearch}
            disabled={!searchTerm}
          >
            Search
          </SearchButton>
        </ButtonContainer>
      </Content>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div className="error">
          <p>Something went wrong</p>
        </div>
      ) : (
        <ResultList gifs={gifs} isLoading={isLoading} isError={isError} />
      )}
    </>
  );
};
