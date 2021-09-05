import React, { useState } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Divider, Form, Checkbox } from "antd";
import {
  SideWarpper,
  SideHeader,
  IconWrapper,
  SideBarTitle,
  SideBarHeading,
} from "./style";
import { category } from "../../fakedata";

export default function SideMenus({ sideOpen, setSideOpen }) {
  const [value, setValue] = useState("");

  function handleChange(checkedValues) {
    setValue(checkedValues.target.value);
  }

  console.log("value -->", value);

  return (
    <SideWarpper>
      <SideHeader>
        <SideBarTitle>Filters</SideBarTitle>
        <IconWrapper onClick={() => setSideOpen(!sideOpen)}>
          <AiOutlineDoubleLeft />
        </IconWrapper>
      </SideHeader>
      <Divider style={{ margin: "14px 0" }} />
      <SideBarHeading className="mb-2">Categories</SideBarHeading>
      <div className="row">
        {category.map((item) => {
          return (
            <div className="col-sm-12 px-3 py-2">
              <Checkbox
                key={item.label}
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
      <Divider style={{ margin: "14px 0" }} />
      <SideBarHeading className="mb-2">Price Range</SideBarHeading>
      <Divider style={{ margin: "14px 0" }} />
      <SideBarHeading className="mb-2">Rating</SideBarHeading>
    </SideWarpper>
  );
}

{
  /* <Form.Item
  style={{ marginLeft: "10px", marginBottom: "10px" }}
  key={item.id}
  onChange={handleChange}
>
  <Checkbox>{item.title}</Checkbox>
</Form.Item>; */
}
