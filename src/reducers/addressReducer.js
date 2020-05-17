import {
  ADD_ADDRESS,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_FAILED,
} from "../constants/ActionTypes";

const initialState = {
  loading: false,
  isSuccess: false,
  address: null,
};

const addressReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ADDRESS:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        address: null,
      };
    case ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        address: payload,
      };
    case ADD_ADDRESS_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        address: null,
      };
    default:
      return state;
  }
};

export default addressReducer;
