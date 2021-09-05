import React, { useState } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Divider, Checkbox, Slider, Rate } from "antd";
import {
  SideWarpper,
  SideHeader,
  IconWrapper,
  SideBarTitle,
  SideBarHeading,
} from "./style";
import { category } from "../../fakedata";
import useWindowSize from "../../helpers/windowSize";

export default function SideMenus({ sideOpen, setSideOpen }) {
  const [value, setValue] = useState("");
  const { width } = useWindowSize();

  function handleChange(checkedValues) {
    setValue(checkedValues.target.value);
  }

  function handleRange(val) {
    console.log(val);
  }

  function handleRating(val) {
    console.log(val);
  }

  return (
    <SideWarpper>
      <SideHeader>
        <SideBarTitle>Filters</SideBarTitle>
        {width <= 480 ? (
          <IconWrapper onClick={() => setSideOpen(!sideOpen)}>
            <AiOutlineDoubleLeft />
          </IconWrapper>
        ) : null}
      </SideHeader>
      <Divider style={{ margin: "14px 0" }} />
      <SideBarHeading className="mb-2">Categories</SideBarHeading>
      <div className="row">
        {category.map((item) => {
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
      <Divider style={{ margin: "14px 0" }} />
      <SideBarHeading className="mb-2">Price Range</SideBarHeading>
      <Slider
        range={{ draggableTrack: true }}
        defaultValue={[20, 80]}
        onChange={handleRange}
      />
      <Divider style={{ margin: "14px 0" }} />
      <SideBarHeading className="mb-2">Rating</SideBarHeading>
      <Rate allowHalf onChange={handleRating} />
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
