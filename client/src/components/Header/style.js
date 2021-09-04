import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  padding: 10px 25px;
  min-height: 82px;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  font-family: "Lobster", cursive !important;
  font-size: 29px;
`;

export const ImageAvatar = styled.div`
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;