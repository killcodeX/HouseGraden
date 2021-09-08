import React, { useState } from "react";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
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

export default function ProductCard({ item }) {
  const [like, setLike] = useState(false);
  return (
    <ProductCardWrapper>
      <ImageWrapper src={item.image} alt={item.title} />
      <CardDetails>
        <NameWrapper>{item.title}</NameWrapper>
        <ReviewWrapper>
          <CategoryWrapper>{item.category}</CategoryWrapper>
          <StarWrapper>
            <AiFillStar />
          </StarWrapper>
          <RatingWrapper>{item.rating}</RatingWrapper>
        </ReviewWrapper>
        <ReviewWrapper>
          <PriceWrapper>{formatter.format(item.price)}</PriceWrapper>
          <Reviews>{`${item.totalReviews} Reviews`}</Reviews>
        </ReviewWrapper>
        <ReviewWrapper className="mt-2">
          <BookButton>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to={`/product/${item._id}`}
            >
              By Now
            </Link>
          </BookButton>
          <LoveWrapper onClick={() => setLike(!like)}>
            {like ? (
              <AiFillHeart style={{ color: "#FF4345" }} />
            ) : (
              <AiOutlineHeart />
            )}
          </LoveWrapper>
        </ReviewWrapper>
      </CardDetails>
    </ProductCardWrapper>
  );
}
