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
import { getFilterData } from "../../redux/actions/postactions";
import { useDispatch } from "react-redux";

export default function SideMenus({ sideOpen, setSideOpen }) {
  const [value, setValue] = useState("");
  const { width } = useWindowSize();
  const dispatch = useDispatch()

  function handleChange(checkedValues) {
    setValue(checkedValues.target.value);
    dispatch(getFilterData({"category": checkedValues.target.value}));
  }

  function handleRange(val) {
    dispatch(getFilterData({"price": val}))
  }

  function handleRating(val) {
    dispatch(getFilterData({"rating": val}))
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
        onAfterChange={handleRange}
      />
      <Divider style={{ margin: "14px 0" }} />
      <SideBarHeading className="mb-2">Rating</SideBarHeading>
      <Rate allowHalf onChange={handleRating} />
    </SideWarpper>
  );
}