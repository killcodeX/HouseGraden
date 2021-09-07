import React, { useState, useEffect } from "react";
import { Rate, Divider, InputNumber } from "antd";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  SectionWrapper,
  ProductImageWrapper,
  ProductTitle,
  ProductReview,
  ProductDescription,
  ProductPrice,
  CartSection,
  AddCartButton,
  WishListButton,
} from "./style";
import ProductDetail from "./productDetail";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../../redux/actions/postactions";

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products.singleproduct);
  const [like, setLike] = useState(false);
  const [numberItem, setNumberItem] = useState(1);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  function onChange(value) {
    setNumberItem(value);
  }

  return (
    <SectionWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 p-3">
            <ProductImageWrapper>
              <img
                src={
                  "//cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-top-4-die-hard-succulents-pack_4368a560-5bb3-426a-bcfc-a30560e365b1_600x600.jpg?v=1612688579"
                }
                alt="plant"
              />
            </ProductImageWrapper>
          </div>
          <div className="col-md-7 col-sm- p-3">
            <ProductTitle>Top 4 Die Hard Succulents Pack</ProductTitle>
            <ProductReview>
              <Rate
                style={{ zIndex: "-1" }}
                allowHalf
                disabled
                defaultValue={4.5}
              />
              <span className="px-5">133 Reviews</span>
            </ProductReview>
            <ProductDescription>
              Succulents are wonderful plants that require very little attention
              to care. They add a textured and structured look to any corner of
              your garden. The unbeatable beauty and hardy nature of succulents
              attract gardeners especially beginners.
            </ProductDescription>
            <CartSection>
              <ProductPrice>{formatter.format(749 * numberItem)}</ProductPrice>
              <div>
                <span className="px-3">Quantity:</span>
                <InputNumber
                  min={1}
                  max={5}
                  defaultValue={1}
                  onChange={onChange}
                />
              </div>
            </CartSection>
            <CartSection>
              <AddCartButton>Add to Cart</AddCartButton>
              <WishListButton onClick={() => setLike(!like)}>
                {like ? (
                  <AiFillHeart style={{ color: "#FF4345", fontSize: "25px" }} />
                ) : (
                  <AiOutlineHeart style={{ fontSize: "25px" }} />
                )}
                <span className="px-2">Add to wish List</span>
              </WishListButton>
            </CartSection>
          </div>
        </div>
        <Divider />
        <ProductDetail />
      </div>
    </SectionWrapper>
  );
}
