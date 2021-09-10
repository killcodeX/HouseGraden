import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Form, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProductSorted } from "../../redux/actions/postactions";
import {
  FlexWrapper,
  FormLabel,
  SearchWrapper,
  SearchBar,
  SearchIcon,
  SearchSuggestion,
  SearchSuggestionItem,
} from "./style";

export default function Searchform() {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const handleFilter = (data) => {
    dispatch(getProductSorted(data));
  };

  const handleChange = (e) => {
    let matches = [];

    if (searchValue.length > 0) {
      matches = allProducts.filter((item) => {
        const regex = new RegExp(`${e.target.value}`, "gi");
        return item.title.match(regex);
      });
    }

    setSuggestions(matches);
    setSearchValue(e.target.value);
  };

  return (
    <FlexWrapper>
      <SearchWrapper>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <SearchBar
          placeholder="Search plants.."
          value={searchValue}
          onChange={handleChange}
        />
        {suggestions.length > 0
          ? suggestions.map((item) => {
              return (
                <SearchSuggestion key={item._id}>
                  <SearchSuggestionItem>{item.title}</SearchSuggestionItem>
                </SearchSuggestion>
              );
            })
          : null}
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
