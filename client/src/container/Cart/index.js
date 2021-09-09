import React from "react";
import { Divider, Steps } from "antd";
import ProductList from "./productlist";
import PriceDetail from "./priceDetail";
import {
  SectionWrapper,
  OrderSummaryCol,
  SectionTitle,
  SectionSubTitle,
} from "./style";

const { Step } = Steps;

export default function Cart() {
  let arr = [1];
  return (
    <SectionWrapper>
      <div className="container">
        <SectionTitle>My Cart</SectionTitle>
        <div className="row">
          <Divider />
          <OrderSummaryCol className="col-sm-12 col-md-5">
            <SectionSubTitle>Orders Summary</SectionSubTitle>
            <Divider />
            {arr.map((item) => {
              return <ProductList key={item} />;
            })}
            <Divider />
            <SectionSubTitle>Payment Summary</SectionSubTitle>
            <Divider />
            <PriceDetail />
          </OrderSummaryCol>
          <div className="col-sm-12 col-md-7 px-5">
            <SectionSubTitle>CheckOut Process</SectionSubTitle>
            <Divider />
            <Steps direction="vertical" current={1}>
              <Step title="Login" description="This is a description." />
              <Step
                title="Shipment Address"
                description="This is a description."
              />
              <Step title="Payment" description="This is a description." />
            </Steps>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
