import { combineReducers } from "redux";
import userLoginReducer from "./auth.reducer";
import themeReducer from "./theme.reducer";

export default combineReducers({
  userLogin: userLoginReducer,
  theme: themeReducer,
});
