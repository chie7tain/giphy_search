import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchBox } from "./components/SearchBox";
import Gif from "./components/Gif";
import NotFound from "./components/NOTFOUND/NotFound";
import Header from "./components/Header";
import API from "./helpers/API";
const App = () => {
  let [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      searchTerm = searchTerm.trim();
      if (searchTerm.length > 0) {
        setIsLoading(true);
        setIsError(false);
        let data = await API.fetchGifs(searchTerm);
        sessionStorage.setItem(searchTerm, JSON.stringify(data));
        setIsLoading(false);
        setGifs(data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <SearchBox
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              setSearchTerm={setSearchTerm}
              isError={isError}
              isLoading={isLoading}
              gifs={gifs}
            />
          }
        />
        <Route path="/:gifId" element={<Gif searchTerm={searchTerm} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
