import React from "react";
import {
  ProductListWrapper,
  FlexSection,
  ProductImageWrapper,
  RightSideProduct,
  ProductTitle,
  ProductCategory,
  PriceWrapper,
  Reviews,
} from "./style";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function Productlist({ item }) {
  return (
    <ProductListWrapper>
      <FlexSection>
        <ProductImageWrapper>
          <img src={item.image} alt={item.title} />
        </ProductImageWrapper>
        <RightSideProduct>
          <ProductTitle>{item.title}</ProductTitle>
          <FlexSection className="pb-3">
            <ProductCategory>{item.category}</ProductCategory>
          </FlexSection>
          <FlexSection>
            <PriceWrapper>{formatter.format(item.price)}</PriceWrapper>
            <Reviews>{`Quantity: ${item.quantity}`}</Reviews>
          </FlexSection>
        </RightSideProduct>
      </FlexSection>
    </ProductListWrapper>
  );
}
