import { combineReducers } from "redux";
import anime from "./anime";
import recommendations from "./recommendations";

export default combineReducers({
  anime,
  recommendations,
});
