import axios from "axios";
import { notification } from "antd";

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

export const ApiFunc = axios.create({ baseURL: baseURL });

ApiFunc.interceptors.request.use((req) => {
  if (localStorage.getItem("housegardentoken")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("housegardentoken")
    )}`;
  }
  return req;
});

// User Api
export const getAllProductApi = async () => {
  try {
    const { data } = await ApiFunc.get(`/housegarden/get-all-products`);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Fetching All Products Failed",
        error.response.data.message
      );
    }
  }
};

// to get single product
export const getSingleProductApi = async (id) => {
  try {
    const { data } = await ApiFunc.get(`/housegarden/single-product/${id}`);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Fetching Single Product Failed",
        error.response.data.message
      );
    }
  }
};

export const getFilterProductApi = async (filter) => {
  try {
    const { data } = await ApiFunc.get(`/housegarden/filter-product`, filter);
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Fetching Filter Product Failed",
        error.response.data.message
      );
    }
  }
};
