import { GetAllProduct } from "./constactions";

import { getAllProductApi } from "../../api/postApi";


// actions
export const getAllProduct = () => async (dispatch) => {
    const result = await getAllProductApi();
    dispatch({
      type: GetAllProduct,
      payload: result,
    });
  };


