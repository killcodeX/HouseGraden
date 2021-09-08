import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 100px;
  padding-bottom: 100px;
`;

export const SectionTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
  margin-top: 0px;
`;

export const SectionSubTitle = styled.div`
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 25px;
`;

export const OrderSummaryCol = styled.div`
  border-left:1px solid #c8beaa;
`;


// product list
export const ProductListWrapper = styled.div`
  //width: 300px;
  border-radius: 6px;
  margin-right: 20px;
  overflow: hidden;
  padding: 20px 15px;
  transition: box-shadow 0.3s;
  box-shadow: 0 13px 43px 0 rgb(37 46 89 / 10%);
  @media (max-width: 480px) {
    margin: 0 auto;
    width: 300px;
  }
`;

export const ProductImageWrapper = styled.div`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  width: 11rem;
  height: 11rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const FlexSection = styled.div`
  display: flex;
  justify-content: space-between;
  //align-items: center;
`;

export const RightSideProduct = styled.div`
  padding-left: 20px;

  @media (max-width: 480px) {
    padding-left: 10px;
  }
`;

export const ProductTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  min-height: 40px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ProductCategory = styled.div`
  color: #909090;
  font-size: 14px;
  font-weight: 400;
`;
