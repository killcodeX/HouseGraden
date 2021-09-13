import React from "react";
import { Form, Input } from "antd";
import { CartStepWrapper, FormLabel, BookButton } from "./style";
import { useFormik } from "formik";

export default function Address({auth}) {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      houseno: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <CartStepWrapper>
      <Form onFinish={formik.handleSubmit}>
        <div className="row">
          <FormLabel>Billed to</FormLabel>
          <div className="col-sm-12 col-md-6">
            <Form.Item
              name="fname"
              rules={[{ required: true, message: "Please input first name!" }]}
            >
              <Input
                type="text"
                placeholder="First Name..."
                value={formik.values.fname}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
          <div className="col-sm-12 col-md-6">
            <Form.Item
              name="lname"
              rules={[{ required: true, message: "Please input last name!" }]}
            >
              <Input
                type="text"
                placeholder="Last Name..."
                value={formik.values.lname}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <FormLabel>House No</FormLabel>
            <Form.Item
              name="houseno"
              rules={[{ required: true, message: "Please input first name!" }]}
            >
              <Input
                type="text"
                placeholder="House No..."
                value={formik.values.houseno}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
          <div className="col-sm-12 col-md-6">
            <FormLabel>Zip Code</FormLabel>
            <Form.Item
              name="pincode"
              rules={[{ required: true, message: "Please input last name!" }]}
            >
              <Input
                type="text"
                placeholder="Zip Code..."
                value={formik.values.pincode}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
        </div>
        <FormLabel>Street</FormLabel>
        <Form.Item
          name="street"
          rules={[{ required: true, message: "Please input first name!" }]}
        >
          <Input
            type="text"
            placeholder="Street..."
            value={formik.values.street}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <FormLabel>City</FormLabel>
            <Form.Item
              name="city"
              rules={[{ required: true, message: "Please input first name!" }]}
            >
              <Input
                type="text"
                placeholder="City..."
                value={formik.values.city}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
          <div className="col-sm-12 col-md-6">
            <FormLabel>State</FormLabel>
            <Form.Item
              name="state"
              rules={[{ required: true, message: "Please input last name!" }]}
            >
              <Input
                type="text"
                placeholder="State..."
                value={formik.values.state}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </div>
        </div>
        <BookButton disabled={auth} type="submit">Save Address</BookButton>
      </Form>
    </CartStepWrapper>
  );
}
