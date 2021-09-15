import React, { useState } from "react";
import { Divider, Checkbox } from "antd";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import useWindowSize from "../../helpers/windowSize";
import { SideWarpper } from "../../components/SideBar/style";
import { SideHeader, IconWrapper, SideBarTitle } from "./style";
import { order } from "../../fakedata";

export default function OrderSideMenus({sideOpen, setSideOpen}) {
  const [value, setValue] = useState("Recent Orders");
  const { width } = useWindowSize();

  function handleChange(checkedValues) {
    setValue(checkedValues.target.value);
  }

  return (
    <SideWarpper>
      <SideHeader>
        <SideBarTitle>Order History</SideBarTitle>
        {width <= 480 ? (
          <IconWrapper onClick={() => setSideOpen(!sideOpen)}>
            <AiOutlineDoubleLeft />
          </IconWrapper>
        ) : null}
      </SideHeader>
      <Divider style={{ margin: "14px 0" }} />
      <div className="row mt-3">
        {order.map((item) => {
          return (
            <div key={item.id} className="col-sm-12 px-3 py-2">
              <Checkbox
                onChange={handleChange}
                checked={item.value == value}
                value={item.value}
              >
                {item.value}
              </Checkbox>
            </div>
          );
        })}
      </div>
    </SideWarpper>
  );
}
