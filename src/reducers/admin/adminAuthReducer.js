import {
  ADMIN_REGISTER,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_REGISTER_FAILED,
  ADMIN_LOGIN,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILED,
  ADMIN_LOGOUT,
  ADMIN_LOGOUT_SUCCESS,
  ADMIN_LOGOUT_FAILED,
  GET_CURRENT_ADMIN,
  GET_CURRENT_ADMIN_SUCCESS,
  GET_CURRENT_ADMIN_FAILED,
} from "../../constants/ActionTypes";
import { getAdminAuthenticationToken } from "../../utils/authentication";

const token = getAdminAuthenticationToken();

const initialState = {
  loading: false,
  isSuccess: false,
  isAuthenticated: token ? true : false,
  token: token ? token : "",
  currentAdmin: {},
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_REGISTER:
      return {
        ...state,
        loading: true,
        isSuccess: false,
      };
    case ADMIN_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
      };
    case ADMIN_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
      };
    case ADMIN_LOGIN:
      return {
        ...state,
        loading: true,
        isSuccess: false,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isAuthenticated: true,
        token: payload,
      };
    case ADMIN_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isAuthenticated: false,
        token: "",
      };
    case ADMIN_LOGOUT:
      return {
        ...state,
        loading: true,
        isSuccess: false,
      };
    case ADMIN_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isAuthenticated: false,
        token: "",
        currentAdmin: {},
      };
    case ADMIN_LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
      };
    case GET_CURRENT_ADMIN:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        currentAdmin: {},
      };
    case GET_CURRENT_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        currentAdmin: payload,
      };
    case GET_CURRENT_ADMIN_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        currentAdmin: {},
      };
    default:
      return state;
  }
};

export default authReducer;
