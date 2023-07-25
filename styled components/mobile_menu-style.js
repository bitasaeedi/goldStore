import styled, {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => props.showmenu === false ? "unset" : 'hidden'};
    height: ${(props) => props.showmenu === false ? "unset" : '100vh'};
  }
`
export const Background=styled.div`
  background-color: rgba(0, 0, 0, 0.57);
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1000;
  transition: opacity 0.8s ease-out;
  opacity: ${(props) => (props.showmenu === true ? '1' : '0')};
  pointer-events: ${(props) => (props.showmenu === true ? 'auto' : 'none')};
  display: ${(props) => (props.showmenu === true ? 'block' : 'none')};
`
export const Menu_container=styled.div`
  display: none;
  background-color: black;
  width: 75%;
  position: fixed;
  border-left: 1px solid #6b6969;
  right: 0;
  top: 0;
  z-index: 2000;
  height: 100vh;
  overflow: scroll;
  transition: transform 0.8s ease-out;
  transform: ${(props) => (props.showmenu === true ? 'translateX(0%)' : 'translateX(200%)')};
  padding: 3rem ;
  &>a{
    color: white;
    padding: 1.5rem .5rem;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    display: none;
    
  }
  @media(max-width: 500px){
    display: unset;
    &>a{
      display: block;
    }
  }
`