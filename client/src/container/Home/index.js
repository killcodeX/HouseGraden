import React, { useEffect } from "react";
import useWindowSize from "../../helpers/windowSize";
import { HomeWrapper, SideMenuWrapper, NoDataBanner } from "./style";
import SideMenus from "../../components/SideBar";
import Searchform from "./searchform";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector, useselector } from "react-redux";
import { getAllProduct } from "../../redux/actions/postactions";

export default function Home() {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.products.sortP);
  const products = useSelector((state) => state.products.allProducts);
  const sortedProduct = useSelector((state) => state.products.sortedProduct);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  if (products?.length == 0) {
    return (
      <HomeWrapper>
        {width > 1000 ? (
          <SideMenuWrapper>
            <SideMenus />
          </SideMenuWrapper>
        ) : null}
        <Searchform />
        <div className="row mt-5">
          <span>No Data</span>
          <NoDataBanner>
            <img
              src={process.env.PUBLIC_URL + "/assets/nodata.png"}
              alt="nodata"
            />
          </NoDataBanner>
        </div>
      </HomeWrapper>
    );
  }

  return (
    <HomeWrapper>
      {width > 1000 ? (
        <SideMenuWrapper>
          <SideMenus />
        </SideMenuWrapper>
      ) : null}
      <Searchform />
      <div className="row mt-5">
        {sort
          ? sortedProduct.map((item) => {
              return (
                <div key={item._id} className="col-sm-4 mb-5">
                  <ProductCard item={item} />
                </div>
              );
            })
          : products.map((item) => {
              return (
                <div key={item._id} className="col-sm-4 mb-5">
                  <ProductCard item={item} />
                </div>
              );
            })}
      </div>
    </HomeWrapper>
  );
}
