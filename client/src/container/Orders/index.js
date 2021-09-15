import React, { useEffect } from "react";
import { Divider } from "antd";
import useWindowSize from "../../helpers/windowSize";
import OrderSideMenus from "./sideMenus";
import {
  SectionWrapper,
  SectionTitle,
  SectionSubTitle,
  SideMenuWrapper,
} from "./style";
import OrderProduct from "../../components/OrderProducts";
import { getorderData } from "../../redux/actions/postactions";
import { useDispatch, useSelector } from "react-redux";

export default function Orders() {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.orderProducts)

  console.log(products)

  useEffect(() => {
    dispatch(getorderData());
  }, []);


  let arr = [1, 2, 3, 4];

  if(products?.length == 0){
    return <span>Loading...</span>
  }

  return (
    <SectionWrapper>
      {width > 1000 ? (
        <SideMenuWrapper>
          <OrderSideMenus />
        </SideMenuWrapper>
      ) : null}
      <div className="container">
        <SectionTitle>My Orders</SectionTitle>
        <Divider />
        <SectionSubTitle>Recent Orders</SectionSubTitle>
        <div className="row mt-4">
          {products?.map((item) => {
            return (
              <div key={item} className="col-sm-12 col-md-6 mb-4">
                <OrderProduct item={item}/>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
