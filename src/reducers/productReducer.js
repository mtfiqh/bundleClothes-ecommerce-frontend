import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  ADD_PRODUCT_TO_CARD,
  ADD_PRODUCT_TO_CARD_SUCCESS,
  ADD_PRODUCT_TO_CARD_FAILED,
  GET_PRODUCT_CART,
  GET_PRODUCT_CART_SUCCESS,
  GET_CURRENT_ADMIN_FAILED,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART_FAILED,
} from "../constants/ActionTypes";

const initialState = {
  loading: false,
  isSuccess: false,
  products: [],
  cart: [],
  product: null,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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
    case ADD_PRODUCT_TO_CARD:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        cart: [],
      };
    case ADD_PRODUCT_TO_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        cart: payload,
      };
    case ADD_PRODUCT_TO_CARD_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        cart: [],
      };
    case GET_PRODUCT_CART:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        cart: [],
      };
    case GET_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        cart: payload,
      };
    case GET_CURRENT_ADMIN_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        cart: [],
      };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        loading: true,
        isSuccess: false,
      };
    case REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        cart: payload,
      };
    case REMOVE_PRODUCT_FROM_CART_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default productReducer;
