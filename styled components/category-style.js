import styled, {createGlobalStyle} from "styled-components";
import {colors} from "@/styled components/styles-info";

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => props.Display === false ? "unset" : 'hidden'};
    height: ${(props) => props.Display === false ? "unset" : '100vh'};
  }
`
export const Path = styled.span`
  font-size: 1.1rem;
  font-weight: 400;

  & > span {
    padding-left: .3rem;
    color: ${colors.texts.category.white3};
    cursor: pointer;

    &.white2 {
      color: ${colors.texts.category.white1};
    }
  }

  @media (max-width: 500px) {
    font-size: .9rem;
    margin-top: 5rem;
    margin-right: 1rem;
    display: block;
  }
`
export const Category_container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 3rem;
  @media (max-width: 500px) {
    display: block;
    margin-top: 2rem;
    position: relative;
  }
`
export const Category_menu = styled.div`
  width: 24.3%;
  @media (max-width: 500px) {
    width: 93%;
    margin: 0 auto;
  }
`
export const Category_menu_top = styled.div`
  padding: 2rem 1.4rem 1rem;
  border: 1px solid ${colors.texts.category.border1};
  border-radius: 10px;

  & > h4 {
    color: ${colors.texts.category.white1};
    font-size: 1.25rem;
    margin-bottom: 2.6rem;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    display: none;
  }
`
export const Search_items = styled.div`
  display: flex;
  color: ${colors.texts.category.white2};
  padding-bottom: .5rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
    border-bottom: 1px solid ${colors.texts.category.border1};
  }

  & > div {
    padding-right: 1rem;
    font-weight: 600;
    font-size: 1.05rem;
    cursor: pointer;
  }

  & > span {
    display: block;
    margin-right: auto;
    padding-left: .3rem;
    line-height: 2rem;
    font-size: 2rem;
    font-weight: 500;
  }
`
export const Category_menu_bottom_container = styled.div`
  display: none;

  & > div {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 500px) {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
    display: ${(props) => props.isopen === false ? "none" : 'block'};
    z-index: 4;
  }
`
export const Category_menu_bottom = styled.div`
  opacity: 1;
  padding: 2rem 1.4rem 1rem;
  border: 1px solid ${colors.texts.category.border2};
  border-radius: 10px;
  margin-top: 1rem;

  & > h4 {
    color: ${colors.texts.category.white1};
    font-size: 1.25rem;
    margin-bottom: 2.6rem;
  }

  @media (max-width: 500px) {
    position: fixed;
    background-color: black;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    transition: transform .8s ease-out;
    transform: ${(props) => (props.Display === false ? 'translateY(100%)' : 'translateY(0%)')};
    z-index: 4;
    box-shadow: 0 0 20px 4px #2c2b2b;
    border-bottom: none;
    height: 60%;
    overflow: scroll;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
    & > h4 {
      margin-bottom: 2rem;
    }
  }
`

export const Category_filters_item = styled.div`

  display: ${(props) => (props.display ? 'block' : 'flex')};
  justify-content: space-between;
  color: ${colors.texts.category.white2};
  padding-bottom: .5rem;

  & > div {
    font-weight: 500;
    font-size: 1.1rem;
  }

  & > div.checkboxs {
    font-size: .9rem;

    & > input {
      margin: 0 .5rem;
      accent-color: rgba(130, 116, 93, 0.86);
    }

    & > span {
      margin-right: 1rem;
    }


  }

  &:not(:last-child) {
    margin-bottom: 2rem;
    border-bottom: 1px solid ${colors.texts.category.border1};
  }

  & > div > div.range {
    margin: 1.5rem 0 2rem;
    direction: ltr;

    & > div > div > div {
      background-color: rgb(130, 116, 93);
    }

    & > div > div > span > div {
      background-color: rgb(106, 92, 75);
      border-color: rgb(67, 61, 48);
    }
  }

  @media (max-width: 500px) {
    padding-bottom: 1rem;
    &:not(:last-child) {
      margin-bottom: 1.4rem;
      border-bottom: 1px solid ${colors.texts.category.border1};
    }

    & > div {
      font-size: 1rem;
    }
  }
`
export const Category_main = styled.div`
  width: 74.5%;
  @media (max-width: 500px) {
    width: 93%;
    margin: 0 auto;
    opacity: ${(props) => (props.dis)};
  }
`
export const Category_main_filters = styled.div`
  color: ${colors.texts.category.white3};
  display: flex;
  justify-content: space-between;
  width: 40%;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
  margin-right: 2rem;

  & > div {
    cursor: pointer;
  }

  & > div.active {
    border-bottom: .2px solid rgba(255, 255, 255, 0.85);
    color: rgba(255, 255, 255, 0.85);
    padding-bottom: .5rem;
  }

  @media (max-width: 500px) {
    width: 93%;
    margin: 0 auto 2.5rem;
    font-size: 1rem;
    display: ${(props) => (props.Display)};
    & > div:hover {
      border-bottom: .2px solid rgba(255, 255, 255, 0.91);
      padding-bottom: .5rem;
    }
  }
`
export const Category_items = styled.div`
  display: grid;
  position: relative;
  min-height: 80vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  & > div.empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(149, 139, 122, 0.94);
    text-align: center;

    & > img {
      display: block;
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr ;
  }
`
export const Category_item = styled.div`
  height: 365px;
  border: .5px solid ${colors.texts.category.border2};
  padding: 1.5rem 1rem .8rem;
  text-align: center;
  cursor: pointer;

  & > img {
    width: 100% !important;
    height: 180px !important;
    min-height: 180px;
  }

  & > h6.title {
    color: ${colors.texts.category.white2};
    font-size: .9rem;
    margin: .4rem 0;
  }

  & > s.price1 {
    color: ${colors.texts.category.white3};
    font-size: .7rem;
  }

  & > div.price2 {
    color: ${colors.texts.category.gold};
    margin-bottom: .5rem;
  }

  & > div.info {
    display: flex;
    color: ${colors.texts.category.white3};
    font-size: .8rem;
  }

  & > div.info > div {
    margin-left: .3rem;
  }

  & > div > span {
    color: rgba(201, 166, 107, 1);
    font-size: 1.30rem;
    margin-left: .2rem;
  }

  @media (max-width: 500px) {
    height: auto;
    padding: 1rem 1rem .5rem;
    & > img {
      height: 150px;
    }

    & > h6.title {
      font-size: .8rem;
      font-weight: 600;
      margin-top: .4rem;
    }

    & > div.price2 {
      font-size: .9rem;
    }
  }
`
export const Category_responsive_menu = styled.div`
  display: none;
  color: ${colors.texts.category.white2};
  margin: 0 1.5rem 1.8rem;
  font-size: 1rem;
  font-weight: 600;

  & > div > span {
    display: inline-block;
    margin: 0 .2rem 0 1.4rem;
    position: relative;
    top: .4rem;
  }

  @media (max-width: 500px) {
    display: flex;
  }
`
