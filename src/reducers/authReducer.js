import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILED,
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILED,
} from "../constants/ActionTypes";
import { getAuthenticationToken } from "../utils/authentication";

const token = getAuthenticationToken();

const initialState = {
  loading: false,
  isSuccess: false,
  isAuthenticated: token ? true : false,
  token: token ? token : "",
  currentUser: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER:
      return {
        ...state,
        loading: true,
        isSuccess: false,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
      };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
      };
    case USER_LOGIN:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        isAuthenticated: false,
        token: "",
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isAuthenticated: true,
        token: payload,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isAuthenticated: false,
        token: "",
      };
    case USER_LOGOUT:
      return {
        ...state,
        loading: true,
        isSuccess: false,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isAuthenticated: false,
        token: "",
        currentUser: null,
      };
    case USER_LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isAuthenticated: false,
        token: "",
        currentUser: null,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        currentUser: null,
      };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        currentUser: payload,
      };
    case GET_CURRENT_USER_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default authReducer;
