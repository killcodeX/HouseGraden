import React from "react";
import { Divider } from "antd";
import { FlexSection, PriceDesc, PriceValue, DiscountWrapper } from "./style";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  })

export default function PriceDetail() {
  return (
    <>
      <FlexSection className='pb-2'>
        <PriceDesc>Total Price:</PriceDesc>
        <PriceValue>{formatter.format(749)}</PriceValue>
      </FlexSection>
      <FlexSection className='pb-2'>
        <PriceDesc>Discount: <DiscountWrapper>{`${15}% off`}</DiscountWrapper></PriceDesc>
        <PriceValue>- {formatter.format(749)}</PriceValue>
      </FlexSection>
      <FlexSection>
        <PriceDesc>Tax:</PriceDesc>
        <PriceValue>+ {formatter.format(749)}</PriceValue>
      </FlexSection>
      <Divider />
      <FlexSection>
        <PriceDesc>Total Amount:</PriceDesc>
        <PriceValue>{formatter.format(749)}</PriceValue>
      </FlexSection>
    </>
  );
}
