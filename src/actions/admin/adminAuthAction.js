import axios from "axios";
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
import { BASE_URL } from "../../constants/ApiServices";

const register = (name, username, password) => async (dispatch) => {};

const login = (username, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });

  dispatch({ type: ADMIN_LOGIN });

  try {
    const response = await axios.post(BASE_URL + "admin/login", body, config);
    const {
      data: { token },
    } = response.data;

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: token,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: ADMIN_LOGIN_FAILED });
  }
};

const logout = () => async (dispatch, getState) => {
  const {
    adminAuth: { token },
  } = getState();
  const config = {
    headers: {
      token: token,
    },
  };

  dispatch({ type: ADMIN_LOGOUT });

  try {
    await axios.post(BASE_URL + "admin/logout", null, config);

    dispatch({ type: ADMIN_LOGOUT_SUCCESS });
  } catch (e) {
    console.error(e);
    dispatch({ type: ADMIN_LOGOUT_FAILED });
  }
};

const getCurrentAdmin = () => async (dispatch, getState) => {
  const {
    adminAuth: { token },
  } = getState();
  const config = {
    headers: {
      token: token,
    },
  };

  dispatch({ type: GET_CURRENT_ADMIN });

  try {
    const response = await axios.get(BASE_URL + "admin/self", config);
    const {
      data: { _id, username, name, created_at },
    } = response.data;

    dispatch({
      type: GET_CURRENT_ADMIN_SUCCESS,
      payload: {
        _id,
        username,
        name,
        created_at,
      },
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_CURRENT_ADMIN_FAILED });
  }
};

export { register, login, logout, getCurrentAdmin };
