import axios from "axios";
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
import { BASE_URL } from "../../constants/ApiServices";

const addProduct = (data) => async (dispatch, getState) => {
  const {
    adminAuth: { token },
  } = getState();

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      token,
    },
  };

  dispatch({ type: ADD_PRODUCT });

  try {
    await axios.post(BASE_URL + "admin/product/", data, config);

    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: null,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: ADD_PRODUCT_FAILED });
  }
};

const getProduct = (productId) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT });

  try {
    const response = await axios.get(BASE_URL + "admin/product/" + productId);

    const { data } = response.data;

    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_PRODUCT_FAILED });
  }
};

const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS });

  try {
    const response = await axios.get(BASE_URL + "admin/product/");

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

const updateProduct = (productId, data) => async (dispatch, getState) => {
  const {
    adminAuth: { token },
  } = getState();

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      token,
    },
  };

  dispatch({ type: UPDATE_PRODUCT });

  try {
    await axios.put(BASE_URL + "admin/product/" + productId, data, config);

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: null,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: UPDATE_PRODUCT_FAILED });
  }
};

const deleteProduct = (productId) => async (dispatch, getState) => {
  const {
    adminAuth: { token },
  } = getState();
  const config = {
    headers: {
      token: token,
    },
  };

  dispatch({ type: DELETE_PRODUCT });

  try {
    await axios.delete(BASE_URL + "admin/product/" + productId, config);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: null,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: DELETE_PRODUCT_FAILED });
  }
};

export { addProduct, getProduct, getProducts, updateProduct, deleteProduct };
