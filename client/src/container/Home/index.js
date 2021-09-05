import React from "react";
import useWindowSize from "../../helpers/windowSize";
import { HomeWrapper, SideMenuWrapper } from "./style";
import SideMenus from "../../components/SideBar";
import Searchform from "./searchform";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  let arr = [1, 2, 3, 4, 5, 6];
  const { width } = useWindowSize();
  return (
    <HomeWrapper>
      {width > 1000 ? (
        <SideMenuWrapper>
          <SideMenus />
        </SideMenuWrapper>
      ) : null}
      <Searchform />
      <div className="row mt-5">
        {arr.map((item) => {
          return (
            <div key={item} className="col-sm-4 mb-5">
              <ProductCard />
            </div>
          );
        })}
      </div>
    </HomeWrapper>
  );
}
