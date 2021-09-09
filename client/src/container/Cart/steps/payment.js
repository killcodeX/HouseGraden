import React from "react";
import { CartStepWrapper, BookButton } from "./style";
import { FlexSection, PriceDesc, PriceValue } from "../style";


// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  })

export default function payment() {
  return (
    <CartStepWrapper>
      <FlexSection className='mb-4'>
        <PriceDesc>Total Amount:</PriceDesc>
        <PriceValue>{formatter.format(749)}</PriceValue>
      </FlexSection>
      <BookButton>Pay Now</BookButton>
    </CartStepWrapper>
  );
}
