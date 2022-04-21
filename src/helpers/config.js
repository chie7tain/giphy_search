const API_KEY = process.env.REACT_APP_API_KEY;
// api urls for getting gifs and single gif
const GIPHY_API = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=<searchTerm>&limit=25&offset=0&rating=g&lang=en`;

const GIPHY_API_SINGLE_GIF = `https://api.giphy.com/v1/gifs/<ID>?api_key=${API_KEY}`;



export {
  GIPHY_API,
  GIPHY_API_SINGLE_GIF
}