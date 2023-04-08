import styled from "styled-components";
import {colors} from "@/styled components/styles-info";
export  const Path=styled.span`
  font-size: 1.1rem;
  font-weight: 400;
     &>span{
       padding-left:.3rem ;
       color: ${colors.texts.category.white1};
       &.white2{
         color: ${colors.texts.category.white2};
       }
     }
    
`
export const Category_container=styled.div`
display: flex`
export const Category_menu=styled.div``
export const Category_menu_top=styled.div``
export const Category_menu_bottom=styled.div``