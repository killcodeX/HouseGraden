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
  NoDataBanner
} from "./style";
import { getCartData } from "../../redux/actions/postactions";
import { useDispatch, useSelector } from "react-redux";

const { Step } = Steps;

export default function Cart() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const cartProduct = useSelector((state) => state.products.cartProduct);
  const amount = useSelector((state) => state.products.cartPricing.finalAmount);
  const [currentStep, setCurrentStep] = useState(2);

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  const stepChange = (current) => {
    setCurrentStep(current);
  };

  if (cartProduct.length == 0) {
    return (
      <SectionWrapper>
        <div className="container">
          <SectionTitle>My Cart</SectionTitle>
          <div className="row">
            <Divider />
            <NoDataBanner>
              <span>No Product in Cart</span>
              <img
                src={process.env.PUBLIC_URL + "/assets/nodata2.png"}
                alt="nodata"
              />
            </NoDataBanner>
          </div>
        </div>
      </SectionWrapper>
    );
  }

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
              onChange={stepChange}
            >
              {/* <Step
                title="Login"
                status={auth? "wait":"finish"}
                icon={<AiOutlineUser />}
                description={<Login auth={auth}/>}
              /> */}
              <Step
                title="Shipment Address"
                icon={<AiOutlineShoppingCart />}
                description={<Address auth={auth}/>}
              />
              <Step
                title="Payment"
                status={auth? "wait":"finish"}
                icon={<AiOutlineAudit />}
                description={<Payment amount={amount} auth={auth}/>}
              />
            </Steps>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
