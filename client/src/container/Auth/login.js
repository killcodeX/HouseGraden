import React from "react";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import {
  Wrapper,
  BannerWrapper,
  FormWrapper,
  CardWrapper,
  CardUpper,
  HotelTag,
  TitleTag,
  LogoWrapper,
  AuthFooter,
  AuthPrivacy,
  FormLabel, SubmitButton
} from "./style";
//import { receiveLogin } from "../../redux/actions/useractions";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      //dispatch(receiveLogin(values, history));
    },
  });
  return (
    <Wrapper className="container-fluid">
      <div className="row">
        <FormWrapper className="col-sm-6">
          <CardWrapper>
            <CardUpper>
              <LogoWrapper>
                <img
                  src={process.env.PUBLIC_URL + "/assets/logo-black.png"}
                  alt="hotel.in"
                />
              </LogoWrapper>
              <HotelTag>
                Raising Comfort to the highest level, Our Hotels & Resorts
                remain stylish, modern, forward thinking global leader of
                hospitality.
              </HotelTag>
              <TitleTag>Login</TitleTag>
            </CardUpper>
            <Form onFinish={formik.handleSubmit}>
              <FormLabel>Email</FormLabel>
              <Form.Item
                name="email"
                hasFeedback
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter correct email!",
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder="enter your email.."
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <FormLabel>Password</FormLabel>
              <Form.Item
                name="password"
                hasFeedback
                rules={[
                  { required: true, message: "Please Select your city!" },
                ]}
              >
                <Input
                  type="password"
                  placeholder="enter your password.."
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <SubmitButton type="submit">Login</SubmitButton>
            </Form>
            <AuthFooter>
              <AuthPrivacy>
                By creating your Journal Bit account, you agree to our{" "}
                <a href="#">Terms, Data Policy</a> and Cookie Policy.
              </AuthPrivacy>
              <span>
                Don't have an account? Go to{" "}
                <Link to="/register">Register</Link>
              </span>
            </AuthFooter>
          </CardWrapper>
        </FormWrapper>
        <BannerWrapper className="col-sm-6"></BannerWrapper>
      </div>
    </Wrapper>
  );
}