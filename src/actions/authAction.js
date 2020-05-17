import axios from "axios";
import { BASE_URL } from "../constants/ApiServices";
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

const register = (name, email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  dispatch({ type: USER_REGISTER });

  try {
    await axios.post(BASE_URL + "user", body, config);

    dispatch({ type: USER_REGISTER_SUCCESS });
    dispatch(login(email, password));
  } catch (e) {
    console.error(e);
    dispatch({ type: USER_REGISTER_FAILED });
  }
};

const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  dispatch({ type: USER_LOGIN });

  try {
    const response = await axios.post(BASE_URL + "user/login", body, config);

    const {
      data: { token },
    } = response.data;

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: token,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: USER_LOGIN_FAILED });
  }
};

const logout = () => async (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();
  const config = {
    headers: {
      token: token,
    },
  };

  dispatch({ type: USER_LOGOUT });

  try {
    await axios.post(BASE_URL + "user/logout", null, config);

    dispatch({ type: USER_LOGOUT_SUCCESS });
  } catch (e) {
    console.error(e);
    dispatch({ type: USER_LOGOUT_FAILED });
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();
  const config = {
    headers: {
      token: token,
    },
  };

  dispatch({ type: GET_CURRENT_USER });

  try {
    const response = await axios.get(BASE_URL + "user/self", config);

    const {
      data: { _id, name, email, created_at },
    } = response.data;

    dispatch({
      type: GET_CURRENT_USER_SUCCESS,
      payload: {
        _id,
        name,
        email,
        created_at,
      },
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_CURRENT_USER_FAILED });
  }
};

export { register, login, logout, getCurrentUser };
