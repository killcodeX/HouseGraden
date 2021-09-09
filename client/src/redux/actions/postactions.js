import {
  GetAllProduct,
  GetSingleProduct,
  GetSorted,
  FilterData,
} from "./constactions";

import { getAllProductApi, getSingleProductApi, getFilterProductApi } from "../../api/postApi";

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
  console.log('from actions -->',filter)
  const result = await getFilterProductApi(filter)
  dispatch({
    type: FilterData,
    payload : result
  })
}