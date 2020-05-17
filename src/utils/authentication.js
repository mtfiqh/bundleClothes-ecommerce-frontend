import Cookie from "js-cookie";
import {
  AUTHENTICATION_TOKEN,
  ADMIN_AUTHENTICATION_TOKEN,
} from "../constants/GeneralConst";

const setAuthenticationToken = (token) => {
  if (token) {
    Cookie.set(AUTHENTICATION_TOKEN, token, { expires: 3 });
  } else {
    Cookie.remove(AUTHENTICATION_TOKEN);
  }
};

const getAuthenticationToken = () => {
  return Cookie.get(AUTHENTICATION_TOKEN);
};

const setAdminAuthenticationToken = (token) => {
  if (token) {
    Cookie.set(ADMIN_AUTHENTICATION_TOKEN, token, { expires: 3 });
    // localStorage.setItem(ADMIN_AUTHENTICATION_TOKEN, token);
  } else {
    Cookie.remove(ADMIN_AUTHENTICATION_TOKEN);
    // localStorage.removeItem(ADMIN_AUTHENTICATION_TOKEN);
  }
};

const getAdminAuthenticationToken = () => {
  return Cookie.get(ADMIN_AUTHENTICATION_TOKEN);
};

export {
  setAuthenticationToken,
  getAuthenticationToken,
  setAdminAuthenticationToken,
  getAdminAuthenticationToken,
};
