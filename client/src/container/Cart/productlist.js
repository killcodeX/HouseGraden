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

export default function Productlist({item}) {
  return (
    <ProductListWrapper>
      <FlexSection>
        <ProductImageWrapper>
          <img
            src={
              "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-top-4-die-hard-succulents-pack_4368a560-5bb3-426a-bcfc-a30560e365b1_504x504.jpg?v=1612688579"
            }
            alt={item.title}
          />
        </ProductImageWrapper>
        <RightSideProduct>
          <ProductTitle>
            {item.title}
          </ProductTitle>
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
