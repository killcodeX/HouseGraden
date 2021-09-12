import React, { useEffect } from "react";
import { SectionWrapper, SectionTitle } from "./style";
import SimpleProduct from "../../components/SimpleProduct";
import { useDispatch, useSelector } from "react-redux";
import { getWishListData } from "../../redux/actions/postactions";

export default function WishList() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.wishListProduct)
  let arr = [1, 2, 3, 4];

  useEffect(() => {
    dispatch(getWishListData())
  },[])

  
  return (
    <SectionWrapper>
      <div className="container">
        <SectionTitle>My WishList</SectionTitle>
        <div className="row mt-4">
          {arr.map((item) => {
            return (
              <div key={item} className="col-sm-12 col-md-6 mb-4">
                <SimpleProduct />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
