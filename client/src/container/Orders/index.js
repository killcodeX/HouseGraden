import React from "react";
import useWindowSize from "../../helpers/windowSize";
import OrderSideMenus from "./sideMenus";
import { SectionWrapper, SectionTitle, SideMenuWrapper } from "./style";

export default function Orders() {
  const { width } = useWindowSize();
  return (
    <SectionWrapper>
      {width > 1000 ? (
        <SideMenuWrapper>
          <OrderSideMenus />
        </SideMenuWrapper>
      ) : null}
      <div className="container">
        <SectionTitle>My Orders</SectionTitle>
        This is Cart Page
      </div>
    </SectionWrapper>
  );
}
