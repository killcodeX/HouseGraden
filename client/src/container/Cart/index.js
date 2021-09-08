import React from "react";
import { Divider, Steps } from "antd";
import ProductList from "./productlist";
import { SectionWrapper, OrderSummaryCol, SectionTitle, SectionSubTitle } from "./style";

const { Step } = Steps;

export default function Cart() {
  let arr = [1,2,3]
  return (
    <SectionWrapper>
      <div className="container">
        <SectionTitle>My Cart</SectionTitle>
        <div className="row">
          <Divider />
          <div className="col-sm-12 col-md-7">
            <SectionSubTitle>Recent Orders</SectionSubTitle>
            <Divider />
            <Steps direction="vertical" current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
          </div>
          <OrderSummaryCol className="col-sm-12 col-md-5">
            <SectionSubTitle>Orders Summary</SectionSubTitle>
            <Divider />
            {
              arr.map(item => {
                return(
                  <ProductList key={item} />
                )
              })
            }
          </OrderSummaryCol>
        </div>
      </div>
    </SectionWrapper>
  );
}
