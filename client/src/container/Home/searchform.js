import React from "react";
import { FiSearch } from "react-icons/fi";
import { Form, Select } from "antd";
import {
  FlexWrapper,
  FormLabel,
  SearchWrapper,
  SearchBar,
  SearchIcon,
} from "./style";

export default function Searchform() {
  const handleFilter = (data) => {};
  return (
    <FlexWrapper>
      <SearchWrapper>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <SearchBar placeholder="Search plants.." />
      </SearchWrapper>
      <div>
        <FormLabel>Sort By</FormLabel>
        <Form.Item style={{ width: "200px" }}>
          <Select
            placeholder="All Products"
            onChange={(data) => handleFilter(data)}
          >
            <Select.Option value="ah">All Products</Select.Option>
            <Select.Option value="plh">Price - Low to High</Select.Option>
            <Select.Option value="phl">Price - High to low</Select.Option>
            <Select.Option value="rlh">Rating - Low to High</Select.Option>
            <Select.Option value="rhl">Rating - High to Low</Select.Option>
          </Select>
        </Form.Item>
      </div>
    </FlexWrapper>
  );
}
