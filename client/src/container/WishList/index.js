import React from "react";
import { SectionWrapper, SectionTitle } from "./style";
import SimpleProduct from "../../components/SimpleProduct";

export default function WishList() {
  let arr = [1, 2, 3, 4];
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
