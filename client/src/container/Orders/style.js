import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 100px;
  margin-left: 250px;
  padding: 40px;

  @media (max-width: 480px) {
    margin-left: 0;
  }
`;

export const SectionTitle = styled.div`
  font-size: 2.2rem;
  font-weight:500;
  margin-top: 0px;
`;

export const SideMenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 82px;
  background-color: white;
  width: 250px;
  height: 100vh;
  padding: 15px;
  border-right: 1px solid #c8beaa;
`;

export const SideHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled.div`
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SideBarTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
`;