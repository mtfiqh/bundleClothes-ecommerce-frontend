import Cookie from "js-cookie";
import { ADMIN_AUTHENTICATION_TOKEN } from "../constants/GeneralConst";

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

export { setAdminAuthenticationToken, getAdminAuthenticationToken };
