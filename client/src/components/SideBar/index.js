import React from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { BsBag, BsHeart } from "react-icons/bs";
import { SideWarpper, SideHeader, IconWrapper } from "./style";

export default function SideMenus({sideOpen, setSideOpen}) {
  return (
    <SideWarpper>
      <SideHeader>
        hi
        <IconWrapper onClick={() => setSideOpen(!sideOpen)}>
          <AiOutlineDoubleLeft />
        </IconWrapper>
      </SideHeader>
    </SideWarpper>
  );
}
