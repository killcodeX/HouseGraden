import React from "react";
import { Divider } from "antd"
import useWindowSize from "../../helpers/windowSize";
import OrderSideMenus from "./sideMenus";
import { SectionWrapper, SectionTitle, SectionSubTitle, SideMenuWrapper } from "./style";
import OrderProduct from "../../components/OrderProducts";

export default function Orders() {
  const { width } = useWindowSize();
  let arr = [1, 2, 3, 4];
  return (
    <SectionWrapper>
      {width > 1000 ? (
        <SideMenuWrapper>
          <OrderSideMenus />
        </SideMenuWrapper>
      ) : null}
      <div className="container">
        <SectionTitle>My Orders</SectionTitle>
        <Divider/>
        <SectionSubTitle>Recent Orders</SectionSubTitle>
        <div className="row mt-4">
          {arr.map((item) => {
            return (
              <div key={item} className="col-sm-12 col-md-6 mb-4">
                <OrderProduct />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
