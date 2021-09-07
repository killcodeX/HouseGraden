import { GetAllProduct } from "../actions/constactions";

const initialState = {
  allProducts: [],
};

// Reducers
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetAllProduct:
      return {
        ...state,
        allProducts: action.payload || [],
      };
    default:
      return state;
  }
};

export default ProductReducer;
