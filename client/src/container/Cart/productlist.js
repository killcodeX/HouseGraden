import React from "react";
import {
  ProductListWrapper,
  FlexSection,
  ProductImageWrapper,
  RightSideProduct,
  ProductTitle,
  ProductCategory,
} from "./style";

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
          <FlexSection className="mb-1">
            <ProductCategory>Plants</ProductCategory>
          </FlexSection>
        </RightSideProduct>
      </FlexSection>
    </ProductListWrapper>
  );
}
