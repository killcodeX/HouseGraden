import React from "react";
import {
  ProductPageTitle,
  AboutProduct,
  ProductReiviews,
  ProductReiviewUpper,
  ProfileImage,
  ReviewTitle,
  ReviewDate,
  ProductActualReview,
} from "./style";

export default function ProductDetail() {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      <ProductPageTitle>About the Plant</ProductPageTitle>
      <AboutProduct>
        Pack of 4 succulents that are very easy to care for. A perfect pack to
        start growing plants worry-free.
        <ul>
          <li>
            You get 4 succulent plants + 4 Colorful Pots in a single pack.
          </li>
          <li>
            Plants in this pack are easy to care for and require low
            maintenance.
          </li>
          <li>
            Succulent plants are hard to kill and impart beauty to your garden.
          </li>
        </ul>
      </AboutProduct>
      <ProductPageTitle>Reviews</ProductPageTitle>
      <div className="row">
        {arr.map((item) => {
          return (
            <div key={item} className="col-sm-12 col-md-6 mb-4">
              <ProductReiviews>
                <ProductReiviewUpper>
                  <ProfileImage>
                    <img
                      src={"https://randomuser.me/api/portraits/women/7.jpg"}
                      alt="profile"
                    />
                  </ProfileImage>
                  <div className="d-flex flex-column">
                    <ReviewTitle>Plants Best Side</ReviewTitle>
                    <ReviewDate>Aarohi on Aug 20, 2021</ReviewDate>
                  </div>
                </ProductReiviewUpper>
                <ProductActualReview>
                  One of the plants dropped leaves the day it arrived though all
                  the instructions were followed meticulously. And worse, there
                  was no response from Nurserylive when I sent a complaint. I
                  will not be shopping from this nursery in future.
                </ProductActualReview>
              </ProductReiviews>
            </div>
          );
        })}
      </div>
    </div>
  );
}
