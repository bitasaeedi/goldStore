import styled from "styled-components";
import {colors} from "@/styled components/styles-info";

export const ProFile = styled.div`
  margin: 5rem 3rem;

  & > h4 {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    color: ${colors.texts.profile.white1};
  }
  @media(max-width: 500px){
    margin: 6rem 0;
    &>h4{
      font-size: 1rem;
      margin: 2rem 1rem ;
      font-weight: 600;
    }
  }

`
export const Profile_container = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 500px){
    display: block;
  }
`

export const Profile_Navbar = styled.div`
  width: 30%;
  border: 1px solid ${colors.texts.profile.white3};
  border-radius: 7px;
  height: fit-content;
  @media(max-width: 500px){
    width: 93%;
    margin: 0 auto;
    display: ${(props) => props.navbarClicked === false ? "block" : 'none'};
  }
`
export const Profile_Navbar_top = styled.div`
  padding: 1.5rem 1.3rem .8rem;
  border: .5px solid rgba(255, 255, 255, 0.22);

  & > div.person_info {
    display: flex;
    margin-bottom: 2.3rem;

    & > div.image {
      width: 50px;
      height: 50px;
      border: 2px solid ${colors.texts.profile.white3};
      border-radius: 50%;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
      }
    }

    & > div.text {
      margin-right: 1rem;

      & > div.name {
        color: ${colors.texts.profile.white1};
      }

      & > div.number {
        color: ${colors.texts.profile.white3};
        font-size: .8rem;
        line-height: 1rem;
      }
    }
  }

  & > div.wallet {
    display: flex;
    color: ${colors.texts.profile.white2};
    margin-right: .5rem;

    & > div {
      margin-right: 1.5rem;
      font-size: 1.2rem;
      line-height: 1rem;
    }
  }

  & > div.money {
    margin: 1.5rem .5rem 1rem 0;
    font-size: 1.1rem;
    font-weight: 300;
    color: ${colors.texts.profile.white2};
  }

  & > div.buttons {
    margin: 0 .5rem;
    display: flex;
    justify-content: space-between;

    & > div {
      border-radius: 10px;
      padding: .7rem 0;
      width: 49%;
      border: 1px solid ${colors.texts.profile.white3};
      color: ${colors.texts.profile.white2};
      text-align: center;
      font-size: .7rem;
    }
  }
`
export const Profile_Navbar_bottom = styled.div`
  & > div.menuitem {
    margin: 1rem 0 .5rem  ;
    padding: .7rem 2.5rem 1rem;
    display: flex;
    
    & > a {
      text-decoration: none;
      font-weight: 500;
      word-spacing: .1rem;
      padding-right: 1rem;
      line-height: 1rem;
      font-size: 1.1rem;
      color: ${colors.texts.profile.white2};
    }
  }

  & > div.menuitem.choosen {
    border-right: 3px solid ${colors.texts.profile.golden};
    color: ${colors.texts.profile.white1} !important;
  }
  &>div.exit_btn{
    display: flex;
    color: ${colors.texts.profile.white2};
    margin: 7rem 2rem 1.5rem;
    &>div{
      margin-right: .8rem;
      word-spacing: .1em;
      font-size: 1.1rem;
      line-height: 1rem;
    }
  }
`
export const Profile_input_list_container=styled.div`
  width: 53.5%;
  margin-top: 3rem;
  margin-left: 6rem;
  @media(max-width: 500px){
  color: rgba(255, 255, 255, 0.79);

  & > span {
    margin: 0 1rem;
    cursor: pointer;
    display: ${(props) => props.navbarClicked === true ? "unset" : 'none'};
  }}
  @media(max-width: 500px){
    width: 93%;
    margin: 0 ;
  }
`
export const Profile_input_list = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto ;
  justify-content: space-between;
  @media(max-width: 500px){
    width: 100%;
    margin:2rem  1rem 0;
    gap: 0 15px;
    display: ${(props) => props.navbarClicked === true ? "grid" : 'none'};
    justify-content: space-around;
  }
`
export const Profile_input = styled.div`
  margin-bottom: 4rem;
  width: 100%;
  & > h6 {
    color: ${colors.texts.profile.white3};
    font-size: 1rem;
    font-weight: 500;
    padding: 0 .5rem 1rem;
  }

  & > div {
    padding: 1rem;
    height: 55px;
    border-radius: 10px;
    border: 1px solid ${colors.texts.profile.golden};
    display: flex;
    justify-content: space-between;

    & > input {
      width: 257px;
      background-color: transparent;
      border: none;
      outline: none;
      color: ${colors.texts.profile.white1};
      font-weight: 500;
      font-family: estedad, serif;
    }
  }
  @media(max-width: 500px){
    margin-bottom: 2.5rem;
   
    & > h6 {
      padding: 0 .5rem .8rem;
    }
    &>div{
      height: 60px;
      & > input {
        width: 90%;
       font-size: .9rem;
    }
    }
  }
`

export const Profile_favorite_list=styled.div`
  margin-top: 3rem;
    display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid ${colors.texts.profile.white3};
  width: 64%;
  @media(max-width: 500px){
    grid-template-columns: 1fr 1fr;
    width: 93%;
    margin:2rem auto 0;
    display: ${(props) => props.navbarClicked === true ? "grid" : 'none'};
  }
`