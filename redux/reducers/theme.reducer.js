// import { DarkTheme, LightTheme } from "@styles/theme";
import Cookies from "js-cookie";

const themeReducer = (state = "light", action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      Cookies.set("theme/@vaibhav", action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default themeReducer;
