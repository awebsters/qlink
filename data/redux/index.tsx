import { combineReducers } from "redux";

import user from "./user";
import schedule from "./schedule";
import courses from "./courses";

export default combineReducers({
  user,
  schedule,
  courses,
});
