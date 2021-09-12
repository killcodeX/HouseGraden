import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
  VERIFY_LOCAL_STORAGE,
  LIKE_UNLIKE_PRODUCT
} from "./constactions";

import {
  userRegister,
  userLogin,
  likeProduct,
  unLikeProduct,
} from "../../api/userApi";

export const receiveLogin = (user, history) => async (dispatch) => {
  const result = await userLogin(user);
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      user: result.result,
      token: result.token,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const receiveSignUp = (user, history) => async (dispatch) => {
  const result = await userRegister(user);
  try {
    dispatch({
      type: SIGNUP_SUCCESS,
      user: result.result,
      token: result.token,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const verifyStorage = () => {
  return {
    type: VERIFY_LOCAL_STORAGE,
  };
};

export const receiveProductLike = (id) => async (dispatch) => {
  const result = await likeProduct({ productId: id });
  try {
    dispatch({
      type: LIKE_UNLIKE_PRODUCT,
      payload: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const receiveProductUnlike = (id) => async (dispatch) => {
  const result = await unLikeProduct({ productId: id });
  try {
    dispatch({
      type: LIKE_UNLIKE_PRODUCT,
      payload: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};