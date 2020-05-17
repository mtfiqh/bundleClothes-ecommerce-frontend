import axios from "axios";
import { BASE_URL } from "../constants/ApiServices";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  ADD_PRODUCT_TO_CARD,
  ADD_PRODUCT_TO_CARD_SUCCESS,
  ADD_PRODUCT_TO_CARD_FAILED,
  GET_PRODUCT_CART,
  GET_PRODUCT_CART_SUCCESS,
  GET_PRODUCT_CART_FAILED,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART_FAILED,
} from "../constants/ActionTypes";

const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS });

  try {
    const response = await axios.get(BASE_URL + "product");

    const { data } = response.data;

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_PRODUCTS_FAILED });
  }
};

const addProductToCart = (productId) => async (dispatch, getState) => {
  const {
    auth: { token },
    product: { cart },
  } = getState();
  const config = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };

  const body = JSON.stringify({ product_id: productId });

  dispatch({ type: ADD_PRODUCT_TO_CARD });

  try {
    await axios.post(BASE_URL + "user/cart", body, config);

    dispatch({
      type: ADD_PRODUCT_TO_CARD_SUCCESS,
      payload: [...cart, productId],
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: ADD_PRODUCT_TO_CARD_FAILED });
  }
};

const getProductCart = () => async (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();
  const config = {
    headers: {
      token: token,
    },
  };

  dispatch({ type: GET_PRODUCT_CART });

  try {
    const response = await axios.get(BASE_URL + "user/cart", config);

    const {
      data: { products_id },
    } = response.data;

    dispatch({
      type: GET_PRODUCT_CART_SUCCESS,
      payload: products_id,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_PRODUCT_CART_FAILED });
  }
};

const removeProductFromCart = (productId) => async (dispatch, getState) => {
  const {
    auth: { token },
    product: { cart },
  } = getState();
  const config = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };

  dispatch({ type: REMOVE_PRODUCT_FROM_CART });

  try {
    await axios.delete(BASE_URL + "user/cart/" + productId, config);

    const index = cart.indexOf(productId);
    cart.splice(index, 1);

    dispatch({
      type: REMOVE_PRODUCT_FROM_CART_SUCCESS,
      payload: [...cart],
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: REMOVE_PRODUCT_FROM_CART_FAILED });
  }
};

export { getProducts, addProductToCart, getProductCart, removeProductFromCart };
