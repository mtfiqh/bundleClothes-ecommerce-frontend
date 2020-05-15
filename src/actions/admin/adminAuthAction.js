import axios from "axios";
import { ADMIN_SIGNIN, ADMIN_SIGNOUT } from "../../constants/ActionTypes";
import { BASE_URL } from "../../constants/ApiServices";

const signIn = (username, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });

  try {
    const response = await axios.post(BASE_URL + "admin/login", body, config);
    const {
      data: { token },
    } = response.data;

    dispatch({
      type: ADMIN_SIGNIN,
      payload: token,
    });
  } catch (e) {
    console.error(e);
  }
};

const signOut = () => async (dispatch, getState) => {
  const { adminAuth } = getState();
  const { token } = adminAuth;
  const config = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };
  try {
    await axios.post(BASE_URL + "admin/logout", null, config);

    dispatch({ type: ADMIN_SIGNOUT });
  } catch (e) {
    console.error(e);
  }
};

export { signIn, signOut };
