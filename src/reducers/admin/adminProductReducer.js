import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
} from "../../constants/ActionTypes";

const initialState = {
  loading: false,
  isSuccess: false,
  product: null,
  products: [],
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        product: null,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        product: payload,
      };
    case ADD_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        product: null,
      };
    case GET_PRODUCT:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        product: null,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        product: payload,
      };
    case GET_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        product: null,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        products: [],
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        products: payload,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        products: [],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        product: null,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        product: payload,
      };
    case UPDATE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        product: null,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        product: null,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        product: payload,
      };
    case DELETE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        product: null,
      };
    default:
      return state;
  }
};

export default productReducer;
