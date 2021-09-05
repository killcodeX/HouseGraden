import styled from "styled-components";

export const NavBar = styled.div`
  position: fixed;
  top:0;
  background:white;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 25px;
  min-height: 82px;
  border-bottom: 1px solid #c8beaa;
  z-index:1;

  @media (max-width: 480px) {
    padding: 10px 5px;
    z-index: 0;
  }
`;

export const SideBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: white;
  width: 250px;
  height: 100vh;
  padding: 15px;
  transition: left 0.5s ease-out;
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

// for body

export const BodyOverlay = styled.body`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-animation: animation-drawer-fade-in 0.3s ease-in-out 1;
  animation: animation-drawer-fade-in 0.3s ease-in-out 1;
  display: ${(props) => props.show};
`;
