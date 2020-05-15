import { ADMIN_SIGNIN, ADMIN_SIGNOUT } from "../../constants/ActionTypes";
import { getAdminAuthenticationToken } from "../../utils/authentication";

const token = getAdminAuthenticationToken();

const initialState = {
  isAuthenticated: token ? true : false,
  token: token ? token : ""
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_SIGNIN:
      return {
        ...state,
        isAuthenticated: true,
        token: payload,
      };
    case ADMIN_SIGNOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: "",
      };
    default:
      return state;
  }
};

export default authReducer;
