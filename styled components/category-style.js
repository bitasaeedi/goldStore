import styled from "styled-components";
import {colors} from "@/styled components/styles-info";

export const Path = styled.span`
  font-size: 1.1rem;
  font-weight: 400;

  & > span {
    padding-left: .3rem;
    color: ${colors.texts.category.white3};

    &.white2 {
      color: ${colors.texts.category.white1};
    }
  }

`

export const Category_container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`

export const Category_menu = styled.div`
  width: 24.3%;
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

export const Category_menu_bottom = styled.div`
  padding: 2rem 1.4rem 1rem;
  border: 1px solid ${colors.texts.category.border2};
  border-radius: 10px;
  margin-top: 1rem;

  & > h4 {
    color: ${colors.texts.category.white1};
    font-size: 1.25rem;
    margin-bottom: 2.6rem;
  }
`

export const Category_filters_item = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.texts.category.white2};
  padding-bottom: .5rem;
  &>div{
   font-weight: 500;
    font-size:1.1rem;
  }
  &:not(:last-child) {
    margin-bottom: 2rem;
    border-bottom: 1px solid ${colors.texts.category.border1};
  }
`

export const Category_main=styled.div`
  width: 74.5%;
  
`
export const Category_main_filters=styled.div`
  color: ${colors.texts.category.white3};
  display: flex;
  justify-content: space-between;
  width: 55%;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
  margin-right: 2rem;

`
export const Category_items = styled.div`
  border: 1px solid ${colors.texts.category.border2};
  border-right: 0;border-bottom: 0;
  display: grid;
  grid-template-columns: auto auto auto auto;
`

export const Category_item = styled.div`
  height: 365px;
  border: 1px solid ${colors.texts.category.border2};
  border-top: 0;
  border-left: 0;
  padding: 1.5rem 1rem .8rem;
  text-align: center;
  &>img{
    width: 100%;
    height: 180px;
    max-height: 180px;
  }
  &>h6.title{
    color: ${colors.texts.category.white2};
    font-size: .9rem;
    margin: .4rem 0;
  }
  &>s.price1{
    color: ${colors.texts.category.white3};
    font-size: .7rem;
  }
  &>div.price2{
    color: ${colors.texts.category.gold};
    margin-bottom: .5rem;
  }
  &>div.info{
    display: flex;
    color: ${colors.texts.category.white3};
    font-size: .8rem;
  }
  &>div.info>div{
    margin-left: .3rem;
  }
  &>div>span{
    color: rgba(201, 166, 107, 1);
    font-size: 1.30rem;
    margin-left: .2rem;
  }
`