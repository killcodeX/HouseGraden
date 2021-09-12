import {
  GetAllProduct,
  GetSingleProduct,
  GetSorted,
  FilterData,
  SearchData,
  ClearSearchData,
  WishListData,
  CartData
} from "./constactions";

import {
  getAllProductApi,
  getSingleProductApi,
  getFilterProductApi,
  getWishListProductApi,
  getCartProductApi
} from "../../api/postApi";

// actions
export const getAllProduct = () => async (dispatch) => {
  const result = await getAllProductApi();
  dispatch({
    type: GetAllProduct,
    payload: result,
  });
};

export const getSingleProduct = (id) => async (dispatch) => {
  const result = await getSingleProductApi(id);
  dispatch({
    type: GetSingleProduct,
    payload: result,
  });
};

export const getProductSorted = (sort) => {
  return {
    type: GetSorted,
    payload: sort,
  };
};

export const getFilterData = (filter) => async (dispatch) => {
  const result = await getFilterProductApi(filter);
  dispatch({
    type: FilterData,
    payload: result,
  });
};

export const getSearchData = (data) => {
  return {
    type: SearchData,
    payload: [data],
  };
};

export const clearSearchData = () => {
  return {
    type: ClearSearchData,
  };
};

export const getWishListData = () => async (dispatch) => {
  const result = await getWishListProductApi();
  dispatch({
    type: WishListData,
    payload: result,
  });
};

export const getCartData = () => async (dispatch) => {
  const result = await getCartProductApi();
  dispatch({
    type: CartData,
    payload: result,
  });
};