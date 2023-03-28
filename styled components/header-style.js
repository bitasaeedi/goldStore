import styled from "styled-components";
import {colors} from "@/styled components/styles-info";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`

export const Header_container = styled.header`
  display: flex;
  justify-content: space-between;
  height: 68px;
  align-items: center;
  padding-top: .5rem;
  margin: 1rem 0 2.5rem;
`

export const Header_items = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background.header_icon};
  border-radius: 5px;
  margin-${(props) => (props.margin==='left' ? 'left' : 'right')}:3rem;
  cursor: pointer;
`