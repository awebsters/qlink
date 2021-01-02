import { combineReducers } from "redux";

import user from "./user";
import schedule from "./schedule";

export default combineReducers({
  user,
  schedule,
});
