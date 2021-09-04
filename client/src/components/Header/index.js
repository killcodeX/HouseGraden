import React from "react";
import {
    AiOutlineUser,
    AiOutlineArrowRight,
    AiOutlineRight,
  } from "react-icons/ai";
  import { Menu, Dropdown } from "antd";
import { NavBar, NavItems, LogoWrapper, ImageAvatar } from "./style";

export default function Header() {
    let auth = true
  const handlelogout = ({key}) => {
    if (key == 3) {
      console.log("log out done !!");
    }
  };
  const menu = (
    <Menu onClick={handlelogout}>
      {auth ? (
        <>
          <Menu.Item key="1" icon={<AiOutlineUser />}>
            My Orders
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
        <NavItems>
          <LogoWrapper>
            House{" "}
            <span style={{ color: "#53974F", fontFamily: "inherit" }}>
              Garden
            </span>
          </LogoWrapper>
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <ImageAvatar>
              <img
                src={process.env.PUBLIC_URL + "/assets/150-7.jpg"}
                alt="profile"
              />
            </ImageAvatar>
          </Dropdown>
        </NavItems>
      </div>
    </NavBar>
  );
}
