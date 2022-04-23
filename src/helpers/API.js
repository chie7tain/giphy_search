import { isPersistedState } from "../helper";
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
  findGif: async (gifId,searchTerm) => {
    try {
      const values = isPersistedState(searchTerm);
      const response = await (
        await fetch(GIPHY_API_SINGLE_GIF.replace(/<ID>/, gifId))
      ).json();
      const { data } = response;

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default API;
