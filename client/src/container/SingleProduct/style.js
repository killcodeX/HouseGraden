import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 100px;
`;

export const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27rem;
  height: 27rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    width: 20rem;
    height: 20rem;
    margin: 0 auto;
  }
`;

export const ProductTitle = styled.div`
  font-size: 2.2rem;
  margin-top: 0px;
`;

export const ProductReview = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductDescription = styled.div`
  margin: 40px 0;
  width: 500px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #9ca8a8;

  @media(max-width:480px){
    width: 330px;
    text-align:center;
    margin:30px auto;
  }
`;

export const ProductPrice = styled.div`
  font-size: 35px;
  @media(max-width:480px){
    margin-bottom:20px;
  }
`;

export const CartSection = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width:480px){
    flex-direction:column;
  }
`;

export const AddCartButton = styled.button`
  min-width: 220px;
  height: 60px;
  background-color: #50cd89;
  border-radius: 0 3px 3px 0;
  border: 0;
  font-size: 20px;
  color: #ffffff;
  box-shadow: none;
  font-weight: 500;
  text-shadow: none;

  @media(max-width:480px){
    margin-bottom:20px;
  }
`;

export const WishListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 220px;
  height: 60px;
  background-color: #fff;
  border-radius: 0 3px 3px 0;
  border: 1px solid #50cd89;
  //border: 0;
  font-size: 20px;
  box-shadow: none;
  font-weight: 500;
  text-shadow: none;
`;
