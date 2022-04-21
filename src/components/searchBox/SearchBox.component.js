import React from "react";

import { useState, useEffect } from "react";
import "../../App.css";

import API from "../../helpers/API";
import Thumb from "../Thumb";

export const SearchBox = () => {
  let [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(e.code);
    try {
      searchTerm = searchTerm.trim();
      if (searchTerm.length > 0) {
        setIsLoading(true);
        setIsError(false);
        let data = await API.fetchGifs(searchTerm);
        console.log(data);
        setIsLoading(false);
        setGifs(data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <>
      <div className="header">
        <div>
          <input
            type="text"
            placeholder="Search for a gif"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => (e.code === "Enter" ? handleSearch(e) : null)}
          />
          <button className="search_btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="result">
        {isLoading ? (
          <div className="loading">
            <div className="loader"></div>
          </div>
        ) : isError ? (
          <div className="error">
            <p>Something went wrong</p>
          </div>
        ) : (
          <div className="list">
            {gifs.map((gif) => (
              <Thumb key={gif.id} clickable image={gif.images.downsized_medium.url} gifIf={gif.id}/>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

              // {/* <div className="item" key={gif.id}>
              //   <img
              //     src={gif.images.downsized_medium.url}
              //     alt={searchTerm}
              //     onClick={() => API.fetchGif(gif.id)}
              //   />
              // </div> */}