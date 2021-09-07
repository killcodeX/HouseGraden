import { GetAllProduct, GetSingleProduct } from "../actions/constactions";

const initialState = {
  allProducts: [],
  singleProduct: {},
};

// Reducers
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetAllProduct:
      return {
        ...state,
        allProducts: action.payload || [],
      };
    case GetSingleProduct:
      return {
        ...state,
        singleProduct: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
