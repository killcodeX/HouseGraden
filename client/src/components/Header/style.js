import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 25px;
  min-height: 82px;
  border-bottom: 1px solid #c8beaa;

  @media (max-width: 480px) {
    padding: 10px 5px;
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftNavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  font-family: "Lobster", cursive !important;
  font-size: 29px;

  @media (max-width: 480px) {
    font-size: 25px;
    padding-left: 10px;
  }
`;

export const RightNavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 160px;

  @media (max-width: 480px) {
    width: 65px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ImageAvatar = styled.div`
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #11bf8b;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
