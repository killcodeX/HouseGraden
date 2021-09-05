import React from "react";
import { FiSearch } from "react-icons/fi";
import { SearchWrapper, SearchBar, SearchIcon } from "./style";

export default function Searchform() {
  return (
    <SearchWrapper>
      <SearchIcon>
        <FiSearch />
      </SearchIcon>
      <SearchBar placeholder="Search plants.." />
    </SearchWrapper>
  );
}
