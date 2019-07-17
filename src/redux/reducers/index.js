import { combineReducers } from "redux";

import grid from "./gridReducer";
import timer from "./timerReducer";

const reducer = combineReducers({
  grid,
  timer
});

export default reducer;
