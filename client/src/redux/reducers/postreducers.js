import {
  GetAllProduct,
  GetSingleProduct,
  GetSorted,
} from "../actions/constactions";

const initialState = {
  allProducts: [],
  singleProduct: {},
  sortedProduct:[],
  sortP: false,
};

// Reducers
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetAllProduct:
      return {
        ...state,
        allProducts: action.payload || [],
        sortedProduct: action.payload
      };
    case GetSingleProduct:
      return {
        ...state,
        singleProduct: action.payload,
      };
    case GetSorted:
      let sortOption = action.payload;
      let AllProductsData = [...state.sortedProduct];
      if (sortOption == "ah") {
        return {
          ...state,
          sortedProduct: state.allProducts,
          sortP: false
        };
      } else if (sortOption == "plh") {
        let sortData = AllProductsData.sort((a, b) => a.price - b.price);
        return {
          ...state,
          sortedProduct: sortData,
          sortP: true
        };
      } else if (sortOption == "phl") {
        let sortData = AllProductsData.sort((a, b) => b.price - a.price);
        return {
          ...state,
          sortedProduct: sortData,
          sortP: true
        };
      } else if (sortOption == "rlh") {
        let sortData = AllProductsData.sort((a, b) => a.rating - b.rating);
        return {
          ...state,
          sortedProduct: sortData,
          sortP: true
        };
      } else if (sortOption == "rhl") {
        let sortData = AllProductsData.sort((a, b) => b.rating - a.rating);
        return {
          ...state,
          sortedProduct: sortData,
          sortP: true
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default ProductReducer;
