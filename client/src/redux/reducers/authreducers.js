import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  VERIFY_LOCAL_STORAGE,
} from "../actions/constactions";

import { saveState, loadState } from "../../helpers/localStrorage";

const initialState = {
  isAuthenticated: loadState("houseGardenLoggedIn") || false,
  token: "",
  user: {},
  inCheckOut: false,
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      saveState("houseGardenLoggedIn", true);
      saveState("houseGardenUser", action.user);
      saveState("houseGardenLoggedIntoken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
      };

    case SIGNUP_SUCCESS:
      saveState("houseGardenLoggedIn", true);
      saveState("houseGardenUser", action.user);
      saveState("houseGardetoken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
      };
    case LOGOUT_SUCCESS:
      saveState("houseGardenLoggedIn", false);
      saveState("houseGardenUser", {});
      saveState("houseGardentoken", "");
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        token: "",
      };

    case VERIFY_LOCAL_STORAGE:
      const auth = loadState("houseGardenLoggedIn");
      const user = loadState("houseGardenUser");
      const token = loadState("houseGardentoken");
      return {
        ...state,
        isAuthenticated: auth,
        user: user,
        token: token,
      };

    default:
      return state;
  }
};

export default AuthReducer;