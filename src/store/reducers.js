import { combineReducers } from "redux";
import { reducer as home } from "../routes/Home/redux";
import { TrackDriverReducer as trackDriver } from "../routes/TrackDriver/module/trackDriver";

export const makeRootReducer = () => {
  return combineReducers({
    home,
    trackDriver
  });
};

export default makeRootReducer;
