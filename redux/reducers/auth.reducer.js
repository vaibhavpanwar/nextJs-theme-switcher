import { authConstants } from "../constants/auth.constants";
import Cookies from "js-cookie";

const initialState = {
  userInfo: null,
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.USER_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case authConstants.USER_REGISTER_SUCCESS:
    case authConstants.USER_LOGIN_SUCCESS:
      Cookies.set("auth-token", action.payload.token);
      return {
        ...state,
        loading: false,
        userInfo: action.payload.user,
      };

    case authConstants.USER_LOGOUT:
      Cookies.remove("auth-token");
      return {
        ...state,
        userInfo: null,
      };

    case authConstants.USER_AUTH_FAIL:
      return {
        ...state,
        error: action.payload,
        userInfo: null,
        loading: false,
      };

    default:
      return state;
  }
};

export default userLoginReducer;
