import React from "react";
import {
  ProductListWrapper,
  FlexSection,
  ProductImageWrapper,
  RightSideProduct,
  ProductTitle,
  ProductCategory,
  PriceWrapper,
  Reviews
} from "./style";


// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function Productlist() {
  return (
    <ProductListWrapper>
      <FlexSection>
        <ProductImageWrapper>
          <img
            src={
              "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-top-4-die-hard-succulents-pack_4368a560-5bb3-426a-bcfc-a30560e365b1_504x504.jpg?v=1612688579"
            }
            alt="product"
          />
        </ProductImageWrapper>
        <RightSideProduct>
          <ProductTitle>
            Water Lily, Nymphae Nouchali (Red) - Plant
          </ProductTitle>
          <FlexSection className="pb-3">
            <ProductCategory>Plants</ProductCategory>
          </FlexSection>
          <FlexSection>
            <PriceWrapper>{formatter.format(749)}</PriceWrapper>
            <Reviews>{`Quantity: ${123}`}</Reviews>
          </FlexSection>
        </RightSideProduct>
      </FlexSection>
    </ProductListWrapper>
  );
}
