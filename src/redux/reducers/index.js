import { combineReducers } from "redux";

import settings from "./settings";
import themes from "./themes";

const reducer = combineReducers({ settings, themes });

export default reducer;
