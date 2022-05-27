import axios from "axios";

const url = "https://animeculture.herokuapp.com/api/v1/anime";
export const recommendAnime = (animeId) =>
  axios.get(`${url}/${animeId}/recommend/`);
