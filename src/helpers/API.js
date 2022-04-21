import { GIPHY_API, GIPHY_API_SINGLE_GIF } from "./config";

const API = {
  fetchGifs: async (searchTerm) => {
    try {
      const response = await (
        await fetch(GIPHY_API.replace(/<searchTerm>/, searchTerm))
      ).json();
      const { data } = response;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  fetchGif: async (gifId) => {
    try {
      const response = await (
        await fetch(GIPHY_API_SINGLE_GIF.replace(/<ID>/, gifId))
      ).json();
      const { data } = response;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default API;
