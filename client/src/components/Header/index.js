import React, { useEffect, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineRight,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { BsBag, BsHeart } from "react-icons/bs";
import { Menu, Dropdown, Badge } from "antd";
import {
  NavBar,
  NavItems,
  LeftNavItems,
  LogoWrapper,
  RightNavItems,
  IconWrapper,
  ImageAvatar,
  SideBar,
  BodyOverlay,
} from "./style";
import SideMenus from "../SideBar";
import useWindowSize from "../../helpers/windowSize";

export default function Header() {
  const { width } = useWindowSize();
  const [sideOpen, setSideOpen] = useState(false);
  let auth = true;

  const handlelogout = ({ key }) => {
    if (key == 3) {
      console.log("log out done !!");
    }
  };

  const menu = (
    <Menu onClick={handlelogout}>
      {auth ? (
        <>
          <Menu.Item key="1" icon={<BsBag />}>
            My Orders
          </Menu.Item>
          <Menu.Item key="1" icon={<BsHeart />}>
            My Wishlist
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3" icon={<AiOutlineArrowRight />} danger>
            Log Out
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="2" icon={<AiOutlineRight />}>
          Login
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <NavBar>
      <div className="container">
        {sideOpen ? (
          <SideBar show={sideOpen}>
            <SideMenus sideOpen={sideOpen} setSideOpen={setSideOpen} />
          </SideBar>
        ) : null}
        <NavItems>
          <LeftNavItems>
            {width <= 480 ? (
              <IconWrapper onClick={() => setSideOpen(!sideOpen)}>
                <AiOutlineMenuUnfold />
              </IconWrapper>
            ) : null}
            <LogoWrapper>
              House{" "}
              <span style={{ color: "#11BF8B", fontFamily: "inherit" }}>
                Garden
              </span>
            </LogoWrapper>
          </LeftNavItems>
          <RightNavItems>
            {width > 480 ? (
              <>
                <Badge dot offset={[-2, 5]}>
                  <IconWrapper>
                    <BsBag />
                  </IconWrapper>
                </Badge>
                <Badge dot offset={[-1, 2]}>
                  <IconWrapper>
                    <BsHeart />
                  </IconWrapper>
                </Badge>
              </>
            ) : null}
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <ImageAvatar>
                <img
                  src={process.env.PUBLIC_URL + "/assets/150-7.jpg"}
                  alt="profile"
                />
              </ImageAvatar>
            </Dropdown>
          </RightNavItems>
        </NavItems>
      </div>
    </NavBar>
  );
}
