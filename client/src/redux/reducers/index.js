import { combineReducers } from "redux";
import ProductReducer from "./postreducers";

export default combineReducers({
  products: ProductReducer,
});