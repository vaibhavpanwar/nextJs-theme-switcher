import { authConstants } from "../constants/auth.constants";
import API from "../../config/API";
import { errorParser, typeDispatcher } from "../../utils/servies.utils";

//ACTION TO LOGIN USER
const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    typeDispatcher(dispatch, authConstants.USER_AUTH_REQUEST);

    try {
      const user = await API.post("/user", { email, password });
      typeDispatcher(dispatch, authConstants.USER_LOGIN_SUCCESS, user);
    } catch (error) {
      let parsedError = await errorParser(error);
      typeDispatcher(dispatch, authConstants.USER_AUTH_FAIL, parsedError);
    }
  };

export { loginUser };
