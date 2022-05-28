import axios from "axios";

const url = "https://kitsu.io/api/edge/anime";

/* Fetching anime list from the kitsu API */
export const fetchAnimeList = ({ page }) =>
  axios.get(`${url}?page%5Blimit%5D=20&page%5Boffset%5D=${(page - 1) * 20}`);
export const getAnime = (id) => axios.get(`${url}/${id}`);
