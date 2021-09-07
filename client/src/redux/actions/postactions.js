import { GetAllProduct, GetSingleProduct } from "./constactions";

import { getAllProductApi, getSingleProductApi } from "../../api/postApi";

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
