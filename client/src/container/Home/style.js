import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin-top: 82px;
  margin-left: 250px;
  padding: 40px;

  @media (max-width: 480px) {
    margin-left: 0;
  }
`;

export const SideMenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 82px;
  z-index: 1;
  background-color: white;
  width: 250px;
  height: 100vh;
  padding: 15px;
  border-right: 1px solid #c8beaa;
`;

// for search form

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const FormLabel = styled.div`
  font-size: 14px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  //z-index:-1;
`;

export const SearchIcon = styled.div`
  display: inline-block;
  position: absolute;
  right: 36px;
  top: 3px;
  font-size: 27px;
  color: #979797;

  @media (max-width: 480px) {
    right: 28px;
    top: 1px;
    font-size: 22px;
  }
`;

export const SearchBar = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 14px;
  border: 1px solid #fafafa;
  padding-left: 28px;
  font-size: 20px;
  font-weight: 400;
  //background: #fafafa;
  color: #979797;
  border: 1px solid #dedede;

  &:focus {
    outline: none;
    border: none;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 36px;
    font-size: 16px;
  }
`;
