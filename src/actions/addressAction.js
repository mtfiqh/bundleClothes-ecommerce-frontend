import axios from "axios";
import { BASE_URL } from "../constants/ApiServices";
import {
  ADD_ADDRESS,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_FAILED,
} from "../constants/ActionTypes";

const addAddress = (address, postalCode, recipient, phoneNumber) => async (
  dispatch,
  getState
) => {
  const {
    auth: { token },
  } = getState();
  const config = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };

  const data = {
    address: address,
    postal_code: postalCode,
    recipient: recipient,
    phone_number: phoneNumber,
  };
  const body = JSON.stringify(data);

  dispatch({ type: ADD_ADDRESS });

  try {
    await axios.post(BASE_URL + "user/address", body, config);

    dispatch({
      type: ADD_ADDRESS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: ADD_ADDRESS_FAILED });
  }
};

export { addAddress };
