import styled, { css } from 'styled-components';
import {colors} from "@/styled components/styles-info";
export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`
export const Products = styled.div`
  width: 100%;
  height: 700px;
`
export const Product_title = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`
export const Product_container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div {
    height: 600px;
  }

`
export const Right_section = styled.div`
  width: 31.5%;
 //&>div>div.swiper-button-prev::after{
 //  width: 20px!important;
 //  height: 20px!important;
 //}
 
`
export const Middle_section = styled.div`
  width: 39%;
  background-color: ${colors.background.product.middle_section};

  & > h4 {
    color: rgba(255, 255, 255, 0.82);
    font-size: 1.75rem;
    word-spacing: .1rem;
    margin: 3rem 2rem 0;
    font-weight: 700;
  }

  & > div.stars {
    direction: ltr;
    margin: 0 2rem 6.5rem;

    & > span {
      color: white;
      float: right;
      font-size: .75rem;
      direction: rtl;
      position: relative;
      top: .6rem;
      right: 1rem;
      font-weight: 300;

      &.number {
        padding-left: .2rem;
      }
    }

    & > div {
      float: right;
    }
  }

  & > p.description {
    color: ${colors.texts.product.p_tag};
    margin: 0 1.1rem 1.5rem;
    font-size: .9rem;
    font-weight: 400;
    word-spacing: .1rem;
    line-height: 1.7rem;
  }

 
`
export const Middle_product_info = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  margin: 1rem 1.2rem;
  
  & > div>div.info_title {
    color: white;
    margin: 1rem 0 .4rem;
    font-size: .9rem;
  }

  & >div>div.info {
    margin-bottom: 1rem;
    background-color: ${colors.background.product.item};
    width: 150px;
    height: 45px;
    border-radius: 5px;
    
  }
`
export const Left_section = styled.div`
  width: 28%;
  border: 1px solid rgba(72, 72, 72, 1);
  padding: 3rem 1.5rem;

  & > h5 {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 2.4rem;
    margin-right: .5rem;
  }

  & > h6 {
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    margin-right: .5rem;

    & > span {
      margin-right: .5rem;
      display: inline-block;
      background-color: rgba(211, 128, 54, 1);
      width: 10px;
      height: 10px;
      border-radius: 100%;
    }
  }

  & > div.input {
    margin: 1rem 0 1.5rem;
    color: white;
    position: relative;

    & > input {
      width: 100%;
      border: none;
      background-color: ${colors.background.product.item};
      border-radius: 5px;
      height: 50px;
      color: #FFFFFF;
      font-size: 1.1rem;
      font-weight: 500;
      padding: 0 1rem;
      outline: none;
    }

    & > img {
      position: absolute;
      left: .8rem;
      top: 1.4rem;
    }
  }
`
export const Amount = styled.div`
  margin: 3.5rem 0 .5rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-weight: 700;
  font-size: 1.1rem;

  & > div {
    text-align: center;

    & > span {
      border: 1px solid #95856A;
      border-radius: 50%;
      display: inline-block;
      width: 25px;
      height: 25px;
      line-height: 1.5rem;
      font-size: 1.4rem;

      &.right {
        margin-right: .5rem;
        cursor: pointer;
      }

      &.left {
        margin-left: .5rem;
        cursor: pointer;
      }
    }
  }
`
export const Button1 = styled.div`
  width: 100%;
  color: #241204;
  background-color: #95856A;
  text-align: center;
  padding: .9rem 0;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
`
export const Button2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: .8rem;
cursor: pointer;
  & > div {
    border: 1px solid #95856A;
    color: white;
    width: 48%;
    text-align: center;
    padding: .8rem 0;
    border-radius: 5px;
    font-weight: 500;
    font-size: .9rem;
  }


`

const responsiveStyles = css`
  @media (max-width: 768px) {
    
  }
`;
