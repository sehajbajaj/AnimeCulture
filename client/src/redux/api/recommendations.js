import axios from "axios";

/* Recommendations from the Django Framework */
/* For deployment purposes add the link to your website instead */
const url = "https://animeculture.herokuapp.com/api/v1/anime";
export const recommendAnime = (animeId) =>
  axios.get(`${url}/${animeId}/recommend/`);
