import React, { useState, useEffect } from "react";
import { Divider, Steps } from "antd";
import ProductList from "./productlist";
import PriceDetail from "./priceDetail";
import Login from "./steps/login";
import Address from "./steps/address";
import Payment from "./steps/payment";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineAudit,
} from "react-icons/ai";
import {
  SectionWrapper,
  OrderSummaryCol,
  SectionTitle,
  SectionSubTitle,
} from "./style";
import { getCartData } from "../../redux/actions/postactions";
import { useDispatch, useSelector } from "react-redux";

const { Step } = Steps;

export default function Cart() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const cartProduct = useSelector((state) => state.products.cartProduct);
  const [currentStep, setCurrentStep] = useState(auth ? 2 : 1);
  let arr = [1];

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  const stepChange = (current) => {
    setCurrentStep(current);
  };

  return (
    <SectionWrapper>
      <div className="container">
        <SectionTitle>My Cart</SectionTitle>
        <div className="row">
          <Divider />
          <OrderSummaryCol className="col-sm-12 col-md-5">
            <SectionSubTitle>Orders Summary</SectionSubTitle>
            <Divider />
            {cartProduct.map((item) => {
              return <ProductList key={item._id} item={item} />;
            })}
            <Divider />
            <SectionSubTitle>Payment Summary</SectionSubTitle>
            <Divider />
            <PriceDetail />
          </OrderSummaryCol>
          <div className="col-sm-12 col-md-7 px-5">
            <SectionSubTitle>CheckOut Process</SectionSubTitle>
            <Divider />
            <Steps
              direction="vertical"
              current={currentStep}
              //onChange={stepChange}
            >
              <Step
                title="Login"
                icon={<AiOutlineUser />}
                description={<Login />}
              />
              <Step
                title="Shipment Address"
                icon={<AiOutlineShoppingCart />}
                description={<Address />}
              />
              <Step
                title="Payment"
                icon={<AiOutlineAudit />}
                description={<Payment />}
              />
            </Steps>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
