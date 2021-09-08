import React, { useState } from "react";
import { Rate } from "antd";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  ProductCardWrapper,
  ProductImageWrapper,
  FlexSection,
  RightSideProduct,
  ProductTitle,
  ProductCategory,
  PriceWrapper,
  Reviews,
  BookButton,
} from "./style";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function OrderProduct() {
  const [like, setLike] = useState(true);
  let obj = { 'ordered' :"#50cd89", 'cancelled':"#FF5052", 'received':"#6571FF"}
  return (
    <ProductCardWrapper>
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
            <Reviews>Ordered on 12th Aug 21</Reviews>
          </FlexSection>
          <FlexSection className="mb-3">
            <PriceWrapper>{formatter.format(749)}</PriceWrapper>
            <ProductCategory><strong>Order id:</strong> #1</ProductCategory>
          </FlexSection>
          <FlexSection>
            <BookButton status={obj['cancelled']}>Cancelled</BookButton>
          </FlexSection>
        </RightSideProduct>
      </FlexSection>
    </ProductCardWrapper>
  );
}
