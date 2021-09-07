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
  const product = useSelector((state) => state.products.singleProduct);
  const [like, setLike] = useState(false);
  const [numberItem, setNumberItem] = useState(1);

  console.log(product)

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  function onChange(value) {
    setNumberItem(value);
  }

  if(!product?.image){
    return <span>loading...</span>
  }

  return (
    <SectionWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 p-3">
            <ProductImageWrapper>
              <img src={product.image} alt={product.title} />
            </ProductImageWrapper>
          </div>
          <div className="col-md-7 col-sm- p-3">
            <ProductTitle>{product.title}</ProductTitle>
            <ProductReview>
              <Rate
                style={{ zIndex: "-1" }}
                allowHalf
                disabled
                defaultValue={product.rating}
              />
              <span className="px-5">{`${product.totalReviews} Reviews`}</span>
            </ProductReview>
            <ProductDescription>{product.description}</ProductDescription>
            <CartSection>
              <ProductPrice>{formatter.format(product.price * numberItem)}</ProductPrice>
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
        <ProductDetail product={product}/>
      </div>
    </SectionWrapper>
  );
}
