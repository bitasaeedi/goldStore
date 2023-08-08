import styled from "styled-components";
import {colors} from "@/styled components/styles-info";

export const Checkout_wrapper = styled.div`
  margin: 6rem auto 3rem;
  max-width: 990px;
`
export const Path = styled.div`
  margin: 0 2rem ;

  & > h4 {
    color: ${colors.texts.checkout.white1};
    font-size: 1.1rem;
  }

  & > div {
    padding-top: .3rem;
    font-size: .7rem;
    color: ${colors.texts.checkout.white2};
  }

  @media (max-width: 500px) {
    & > h4 {
      font-size: 1rem;
      font-weight: 600;
    }
  }
`
export const Checkout_container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  @media (max-width: 500px) {
    display: block;
    position: relative;
    margin-top: 2rem;
  }
`
export const Checkout_right_section = styled.div`
  width: 60%;
  border: 1px solid ${colors.texts.checkout.border};
  padding: 3rem 3rem 1rem;
  height: auto;
  @media(max-width: 500px){
    width: 92%;
    margin: 0 auto 3rem;
    padding: 2rem 2rem 1rem;
  }
`
export const Purchased_item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  text-align: center;

  & > img {
    width: 30%;
    height: 130px;
  }

  & > div > div.title {
    margin-top: 2rem;
    color: ${colors.texts.checkout.white1};
    font-size: .8rem;
    font-weight: 600;
  }

  & > div > div.price {
    color: rgba(149, 133, 106, 0.72);
    font-size: .8rem;
    padding: .2rem 0;
    font-weight: 500;
  }

  & > div > div.delete_btn {
    color: ${colors.texts.checkout.white2};
    font-size: .5rem;
    border-bottom: 1px solid ${colors.texts.checkout.white2};
    padding-bottom: .02rem;
    margin: 0 auto;
    width: fit-content;
    cursor: pointer;
  }
  @media(max-width: 500px){
    & > div > div.title{
      font-weight: 500;
      font-size: .7rem;
    }
    &>div.info{
      width: 40%;
      padding-right: 1rem;
      text-align: center;
    }
    &>img{
      height: 130px;
     padding-left: 1rem;
      padding-top: 1.5rem;
    }
  }
`
export const Amount = styled.div`
  margin-top: 1.5rem;
  margin-right: 5rem;
  width: 36px;
  height: fit-content;
  border-radius: 10px;
  border: 1px solid ${colors.texts.checkout.border};
  color: rgba(149, 133, 106, 0.72);
  font-size: 1.1rem;
  font-weight: 500;

  & > div {
    cursor: pointer;
  }

  & > div.number {
    cursor: unset;
    color: white;
  }
@media(max-width: 500px){
  width: 42px;
font-weight: 600;
}
`
export const Checkout_left_section = styled.div`
  width: 37%;
  border: 1px solid ${colors.texts.checkout.border};
  padding: 3.5rem 1.5rem 2rem;
  height: fit-content;

  & > div.item {
    display: flex;
    justify-content: space-between;
    color: ${colors.texts.checkout.white2};
    margin-bottom: 1.8rem;
  }
  @media(max-width: 500px){
    width: 92%;
    margin: 0 auto 3rem;
  }
`
export const Buy_btn = styled.div`
  padding: 4rem 1rem 0;
  &.responsive_btn{
    display: none;
  }
  & > div {
    color: ${colors.texts.checkout.white2};
    display: flex;
    justify-content: space-between;
    font-size: 1.15rem;
    font-weight: 600;
  }

  & > button {
    cursor: pointer;
    background-color: ${colors.texts.checkout.border};
    width: 100%;
    border-radius: 7px;
    height: 50px;
    margin: 1.5rem 0 0;
    border: 0;
    color: ${colors.texts.checkout.white1};
    font-weight: 700;
    font-size: 1.3rem;
    font-family: estedad, serif;
   
  }
 
  @media (max-width: 500px) {
    padding-top: 2rem;
    & > button {
      display: none;

      &.responsive_btn {
        width: 82%;
        display: block;
        height: 65px;
        margin: 0;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        bottom: 5%;
        background-color: rgb(124, 109, 90);
      }
    }
  }
`