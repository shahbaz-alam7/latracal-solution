import handleStudents from "./students";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  studentsReducer: handleStudents,
});

export default rootReducer;
