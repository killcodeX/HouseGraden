import { notification } from "antd";
import { ApiFunc } from "./postApi";

const openNotificationWithIcon = (type, title, message) => {
    notification[type]({
      message: title,
      description: message,
    });
  };


// User Api
export const userRegister = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/housegarden/signup`, body);
    openNotificationWithIcon("success", "Signup Successful", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Signup Failed",
        error.response.data.message
      );
    }
  }
};

export const userLogin = async (body) => {
  try {
    const { data } = await ApiFunc.post(`/housegarden/signin`, body);
    openNotificationWithIcon("success", "Login Successful", "");
    return data;
  } catch (error) {
    if (error.response) {
      openNotificationWithIcon(
        "error",
        "Login Failed",
        error.response.data.message
      );
    }
  }
};
