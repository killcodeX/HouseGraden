import React from "react";
import { Divider } from "antd";
import { useLocation } from "react-router-dom";
import { FooterWrapper, FooterContent, FooterItems } from "./style";

export default function Footer() {
  let location = useLocation();
  let footSmall = false;
  if(location.pathname == '/' || location.pathname == "/my-orders"){
    footSmall = true
  }

  return (
    <FooterWrapper foot={footSmall}>
      <div className="container">
        <FooterContent>
          <span>© Copyright 2021 House Garden</span>
          <FooterItems>
            <span>About House Garden</span>
            <Divider type="vertical" />
            <span>Contact Us</span>
            <Divider type="vertical" />
            <span>Terms And Conditions</span>
          </FooterItems>
        </FooterContent>
      </div>
    </FooterWrapper>
  );
}
