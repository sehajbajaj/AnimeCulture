import * as recommendations from "../api/recommendations";
import { GET_RECOMMENDATIONS } from "../constants/actionTypes";

export const getRecommendations = (id) => async (dispatch) => {
  try {
    const { data } = await recommendations.recommendAnime(id);
    console.log(id, data);
    const action = {
      type: GET_RECOMMENDATIONS,
      payload: data,
    };
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};
