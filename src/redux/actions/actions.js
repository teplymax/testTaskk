import {
  GET_PRODUCTS,
  GET_ONE_PRODUCT,
  SHOW_PRODUCT_FORM,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "./actionTypes";

export const showProductForm = (payload) => ({
  payload,
  type: SHOW_PRODUCT_FORM,
});

export const getProducts = (payload) => ({
  payload,
  type: GET_PRODUCTS,
});

export const getOneProduct = (payload) => ({
  payload,
  type: GET_ONE_PRODUCT,
});

export const addProduct = (payload) => ({
  payload,
  type: ADD_PRODUCT,
});

export const deleteProduct = (payload) => ({
  payload,
  type: DELETE_PRODUCT,
});

export const updateProduct = (payload) => ({
  payload,
  type: UPDATE_PRODUCT,
});
