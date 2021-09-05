import React, { useState } from "react";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  ProductCardWrapper,
  ImageWrapper,
  CardDetails,
  NameWrapper,
  CategoryWrapper,
  PriceWrapper,
  ReviewWrapper,
  StarWrapper,
  RatingWrapper,
  Reviews,
  BookButton,
  LoveWrapper,
} from "./style";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function ProductCard() {
  const [like, setLike] = useState(false);
  return (
    <ProductCardWrapper>
      <ImageWrapper
        src={
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-set-of-3-air-purifier-n-summer-cooling-plants-pack_512x512.jpg?v=1617626935"
        }
        alt="plant"
      />
      <CardDetails>
        <NameWrapper>
          Set of 3 Air Purifier n Summer Cooling Plants Pack
        </NameWrapper>
        <ReviewWrapper>
          <CategoryWrapper>Plants</CategoryWrapper>
          <StarWrapper>
            <AiFillStar />
          </StarWrapper>
          <RatingWrapper>4.2</RatingWrapper>
        </ReviewWrapper>
        <ReviewWrapper>
          <PriceWrapper>{formatter.format(749)}</PriceWrapper>
          <Reviews>{`480 Reviews`}</Reviews>
        </ReviewWrapper>
        <ReviewWrapper className="mt-2">
          <BookButton>By Now</BookButton>
          <LoveWrapper onClick={() => setLike(!like)}>
            {like ? <AiFillHeart style={{color:'#FF4345'}}/> : <AiOutlineHeart />}
          </LoveWrapper>
        </ReviewWrapper>
      </CardDetails>
    </ProductCardWrapper>
  );
}
