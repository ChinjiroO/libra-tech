import { combineReducers } from "redux";
import dataReducer from "./Data/reducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
