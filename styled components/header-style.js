import styled, {css} from "styled-components";
import {colors} from "@/styled components/styles-info";

export const Header_container = styled.header`
  display: flex;
  justify-content: space-between;
  
  height: 68px;
  align-items: center;
  padding-top: .5rem;
  margin: 1rem 0 2.5rem;
  &>div.icon{
    cursor:pointer;
  }

  @media (max-width: 768px) {
    display: none;
    
  }
`
export const Header_items = styled.div`
  & > a {
    text-decoration: none;
    color: ${colors.texts.header};
  }

  color: ${colors.texts.header};
  font-weight: 400;
  padding: 1rem 0 0;
  cursor: pointer;

  &:hover {
    color: ${colors.texts.header_hover};
    font-weight: 500;
  }
`
export const Header_icon = styled.div`
  width: 55px;
  height: 55px;
position: relative;
  background-color: ${colors.background.header_icon};
  border-radius: 5px;
  margin-${(props) => (props.margin === 'left' ? 'left' : 'right')}: 3rem;
  cursor: pointer;
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  @media(max-width: 500px){
    width: 45px;
    height: 45px;
    &>a{
    position: relative;
    z-index: 30;
    }
  }
 
`
export const Search_bar=styled.div`
 background-color: black;
  width: 200px;
  height: 46px;
  position: absolute;
  bottom: -3.7rem;
  right: 0;
  border-radius: 10px;
  display: flex;
  padding: 0 .7rem;
  transition: transform .4s ease-out;
  // display: ${(props) => (props.showSearchBar===true ? 'flex' : 'none')};
  transform: ${(props) => (props.showSearchBar===true ? 'translateX(0%)' : 'translateX(700%)')};
 
  z-index: 5;
  & > span {
    color: #928a80;
    font-size: 1rem;
    padding-top: .9rem;
    z-index: 1002;
  }

  & > input {
    width: 100%;
    height: 100%;
    background-color: unset;
    border: 0;
    outline: none;
    font-size: 1rem;
    color: #aba296;
  }
  @media(max-width: 500px){
    transition: opacity 0.5s ease-out;
    transform:  unset;
   left: 0;right: unset;
    opacity:  ${(props) => (props.showSearchBar===true ? '1': '0')};
   
  }
`
////////////////////////////mobile header
export const Mobile_header_container = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 2;
  width: 100%;

  & > div.right_side > span {
    font-size: 2.2rem;
    top: 1rem;
    right: .5rem;
    position: absolute;
    color: #71644c;

  }

  & > div.right_side > img:last-of-type {
    margin-top: .4rem;
    margin-right: 2rem;
    width: 130px;
    height: 50px;
  }

  & > div.left_side {
    display: flex;

    & > div {
      margin: .5rem 0 0 .8rem;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`
