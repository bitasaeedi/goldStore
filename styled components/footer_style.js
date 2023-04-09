import styled from "styled-components";
import {colors} from "@/styled components/styles-info";

export const Wrapper = styled.div`
  max-width: 1330px;
  margin: 20rem auto 0;
`
export const Footer_container = styled.footer`
  display: flex;
  justify-content: space-between;
 
padding-left: 3rem;
`
export const Footer_section = styled.div`
`
export const Footer_title = styled.h2`
  color: ${colors.texts.footer_title};
  font-weight: 400;
  padding-bottom: 1.5rem;

`
export const Footer_item = styled.div`
    color: ${colors.texts.footer_item};
  font-weight: 400;
  font-size: .9rem;
  line-height: 2.5rem;
`
export const Email_section=styled.div`
    margin-top: 6.5rem;
`
export const Email_input=styled.input.attrs({type:'email',placeholder:'ایمیل شما'})`
border-radius: 15px;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  height: 50px;
  min-width:210px;
  padding: 0 1rem;
  outline: none;
  background-color: ${colors.background.footer_item};
`
export const Submit_btn=styled.button`
  border-radius: 15px;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  height: 50px;
  padding: 0 1.6rem;
  background-color: ${colors.background.footer_item};
  margin-right: 1rem;
  font-size: 1rem;
`