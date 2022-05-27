import { GET_RECOMMENDATIONS } from "../constants/actionTypes";

export default (recommendations = [], action) => {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return action.payload;
    default:
      return recommendations;
  }
};
