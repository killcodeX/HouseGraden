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
  LoveWrapper,
} from "./style";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function SimpleProduct() {
  const [like, setLike] = useState(true);
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
          <FlexSection className='mb-1'>
            <ProductCategory>Plants</ProductCategory>
            <Rate style={{ fontSize: "16px" }} value={4.2} />
          </FlexSection>
          <FlexSection className='mb-3'>
            <PriceWrapper>{formatter.format(749)}</PriceWrapper>
            <Reviews>{`${123} Reviews`}</Reviews>
          </FlexSection>
          <FlexSection>
            <BookButton>Add To Cart</BookButton>
            <LoveWrapper onClick={() => setLike(!like)}>
              {like ? (
                <AiFillHeart style={{ color: "#FF4345" }} />
              ) : (
                <AiOutlineHeart />
              )}
            </LoveWrapper>
          </FlexSection>
        </RightSideProduct>
      </FlexSection>
    </ProductCardWrapper>
  );
}
