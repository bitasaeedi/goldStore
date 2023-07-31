import styled, {css} from "styled-components";
import {colors} from "@/styled components/styles-info";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 500px) {
    max-width: 500px;
  }
`
//video
export const Home_video_container = styled.div`
  width: 100%;
  height: 520px;
  color: white;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
  }
  @media(max-width: 500px){
    height: 410px;
  }
`
export const Home_video = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.27);
  position: absolute;
  top: 0;
  text-align: center;
  padding-top: 5rem;

  & > h6 {
    color: ${colors.texts.home.video_title};
    font-weight: 500;
    font-size: 2.2rem;
    padding-top: 1rem;
  }

  & > div {
    color: ${colors.texts.home.video_text};
    font-weight: 500;
    font-size: 1.14rem;
    width: 41%;
    margin: 0 auto;
    padding-top: .4rem;
    
  }
  
  & > button {
    display: block;
    background-color: unset;
    color: white;
    border: 1px solid #EDEDED;
    font-weight: 600;
    border-radius: 100px;
    font-size: .95rem;
    padding: .4rem .5rem;
    font-family: estedad, serif;
    margin: 2.5rem auto 1.7rem;
  }

  & > span {
    color: ${colors.texts.home.video_golden};
    font-weight: 700;
    font-size: .95rem;
  }
  @media (max-width: 500px) {
    padding-top: 6rem;
    &>h6{
      padding-top: 0;
      font-size: 1.5rem;
    }
    &>div{
      width: 70%;
      font-size: .9rem;
    }
    &>button{
      margin: 1rem auto .4rem;
      font-size: .8rem;
      padding: .4rem .5rem;
      border: .01rem solid #EDEDED;
    }
    &>span{
      font-size: .8rem;
    }
  }

`
export const Play_icon = styled.span`
  background-color: rgba(0, 0, 0, 0.35);
  width: 106px;
  height: 106px;
  display: inline-block;
  border-radius: 50%;
  position: relative;

  & > img {
    position: absolute;
    top: 35%;
    left: 38%;
  }
  @media(max-width: 500px){
    width: 80px;
    height: 80px;
    & > img {
      top: 28%;
      left: 38%;
      width: 25px;
    }
  }
  
`

//collection
export const Home_collection_container = styled.div`
  display: grid;
  grid-template-columns:326px 294px 2fr;
  grid-template-rows: 227px 228px;
  margin: 2rem 0;
 gap: 10px;
  @media (max-width: 500px) {
    margin: 3rem 1rem 0; 
    grid-template-columns:1fr 1fr;
    grid-template-rows: 200px 200px;
  }

`
export const Collection_section_R = styled.div`
  width: 49.3%;
  height: 475px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Top_section = styled.div`
  display: flex;
  justify-content: space-between;

`
export const Top_section_items = styled.div`
  width: ${(props) => (props.dir === 'left' ? '100%' : '100%')};
  height: 227px;
  background-color: ${colors.background.home.items};
  border-radius: 10px;
  position: relative;
&.left{
  direction: ltr;
}
  & > div {
    color: ${(props) => (props.dir === 'left' ? colors.texts.home.type_1 : 'white')};
    text-align: center;
    font-weight: ${(props) => (props.dir === 'left' ? '700' : '500')};
    font-size: ${(props) => (props.dir === 'left' ? '1.55rem' : '1.2rem')};
    position: absolute;
    bottom: ${(props) => (props.dir === 'left' ? '6rem' : '3rem')};
    right: ${(props) => (props.dir === 'left' ? '3rem' : '1.5rem')};
  }

  & > img {
    width: 100%;
    height: 100%;
  }
  @media(max-width: 500px){
    height: 200px;
    &>div{
      right: 1.2rem;
      bottom: ${(props) => (props.dir === 'left' ? '5rem' : '3rem')};
      font-size: ${(props) => (props.dir === 'left' ? '1.1rem' : '1rem')};
      font-weight: ${(props) => (props.dir === 'left' ? '600' : '400')};
    }
  }
`
export const Bottom_section = styled.div`
  height: 227px;
  position: relative;
  grid-row: 2;
  grid-column: 1/3;
  @media (max-width: 500px) {
    grid-row: 2;
    grid-column: 1/2;
    width: 100%;
    height: 200px;
  }
  & > img {
   border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  & > div {
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
export const Collection_section_L = styled.div`
  width: 100%;
  position: relative;
  grid-row: 1/3;
  grid-column: 3/4;
  & > div {
    position: absolute;
    top: 5rem;
    right: 2.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${colors.texts.home.type_3};

    & > span {
      color: ${colors.texts.home.type_2};
    }
  }

  & > img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 500px) {
    grid-row: 1;
    grid-column: 1/2;
    height: 200px;
    &>div{
      top: 3rem;
      right: 1rem;
      font-size: .95rem;
    }
  }
`
export const See_more_btn = styled.span`
  color: ${colors.texts.home.type_1};
  position: absolute;
  font-weight: 500;
  bottom: ${(props) => (props.dir === 'left' ? '1.7rem' : '.7rem')};
  right: ${(props) => (props.dir === 'left' ? '2.5rem' : '1.5rem')};
  cursor: pointer;
  @media(max-width: 500px){
    font-size: .9rem;
    right: ${(props) => (props.dir === 'left' ? '1rem' : '1.3rem')};
  }
`

//assortment
export const Assortment_container = styled.div`
  margin: 9rem auto 6rem;
  @media (max-width: 500px) {
    margin: 7rem auto 1rem;
  }
`
export const Assortment_Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1.7rem 2rem;
  color: ${colors.texts.home.assortment_title};
  & > div {
    font-size: 1rem;
    font-weight: 500;

    & > h3 {
      display: inline-block;
    }
  }
  @media (max-width: 500px) {
    margin: 0 .8rem 1.5rem;
    &>div{
      font-size: .6rem;
      font-weight: 700;
    }
  }
`
export const Assortment_title = styled.div`
  display: flex;
  width: 38%;
  justify-content: space-between;
  & > div {
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    &.active {
      position: relative;
      bottom: 7px;
      padding: .35rem 1.7rem;
      background-color: ${colors.background.home.assortment_title};
      border-radius: 91px;
      color: black;
      
    }
  }
  @media (max-width: 500px) {
    width:55%;
    
    &>div{
      font-size: .8rem;
      &.active{
        padding: .2rem 1rem;
        margin-top: .3rem;
      }
    }
  }
`
export const Assortment_items_container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 50px 30px;
  margin: 0 1.7rem 2rem;
  @media (max-width: 500px) {
    grid-template-columns: auto auto ;
    margin: 0 1.3rem 2rem;
    gap: 20px 20px;
  }
`
export const Assortment_item = styled.div`
  width: 100%;
  background-color: ${colors.background.home.items};
  height: 303px;
  padding: .6rem .5rem;
  text-align: center;
  line-height: 1.35rem;
  position: relative;
  word-spacing: .1rem;

  & > img {
    width: 100%;
  }

  & > div {
    padding-top: .2rem;
    color: ${colors.texts.home.assortment1};
    font-size: .9rem;

    &.price {
      color: ${colors.texts.home.assortment3};
      font-size: .85rem;
      line-height: .5rem;
      font-weight: 400;
    }

    &.buy_icon > img {
      position: absolute;
      bottom: .3rem;
      left: .6rem;
    }
  }

  & > s {
    color: ${colors.texts.home.assortment2};
    font-size: .7rem;
  }
  @media(max-width: 500px){
    height: 290px;
  }
`

//compliment
export const Compliment_container = styled.div`
  display: flex;
  margin: 0 2.5rem;
  align-items: center;
  justify-content: space-between;
  & > div {
    color: ${colors.texts.home.compliment_text};
    word-spacing: .1rem;
    text-align: center;
    line-height: 2.2rem;
    font-size: 1.1rem;
    font-weight: 400;
    &>img{
      width: 95%;
    }

    &.text {
      width: 50%;
      border: 1px solid rgba(149, 133, 106, 0.58);
      padding: 2.1rem 2.5rem;
    }
  }
  @media (max-width: 500px) {
    display: block;
    
    &>div.text{
      margin: 1rem auto 0;
      width: 95%;
      font-size: .9rem;
    }
  }
`

//worthiness
export const Worthiness_container = styled.div`
  text-align: center;
  margin: 10rem auto 15rem;
  width: 100%;
  @media (max-width: 500px) {
    margin: 6rem auto 10rem;
  }
  & > h6 {
    color: ${colors.texts.home.worthiness_title};
    font-size: 1.5rem;
    font-weight: 500;
    word-spacing: .1rem;
    margin-bottom: 2rem;
  }
`
export const Worthiness_item_container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1.5rem;
  @media (max-width: 500px) {
    display: grid;
    grid-template-areas: 'top-right top-left'
  'bottom-right bottom-left';
    margin: 0 1rem;
    gap: 1rem;
    &>div{
      width: 100%!important;
    }
  }
`
export const Worthiness_item = styled.div`
  border: 1px solid ${colors.texts.home.worthiness_icon};
  ${(props) => `border-${props.side}-radius: 52px;`};
  position: relative;
  width: 22.5%;
  grid-area: ${(props) => props.side} ;
  & > div {
    color: white;
    margin: 5rem 2.6rem 2.5rem;
    font-size: 1.1rem;
  }

  & > img {
    position: absolute;
    top: 1rem;
    left: 3rem;
  }
  @media(max-width: 500px){
    &>div {
      font-size: .8rem;
      margin: 4rem 2rem 2rem;
    }
    &>img{
      width: 22px;
      left: 2rem;
    }
  }
`

//comments
export const Comments_container = styled.div`
  
  width: 100%;
  margin: 0 auto;
  background-color: ${colors.background.home.items};
  color: white;
  text-align: center;

  & > h6 {
    padding: 2rem 0 .5rem;
    font-size: 1.6rem;
    font-weight: 400;
  }

  & > div {
    line-height: 2rem;
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 4rem;
  }
  @media(max-width: 500px){
 width: 92%;
    height: auto;
    & > h6{
      font-size: 1.2rem;
    }
    &>div{
      font-size: .9rem;
      margin-bottom: 2rem;
    }
  }
`
export const All_comments = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
`
export const Comments = styled.div`
  background-color: rgba(52, 31, 15, 0.5);
  width: 100%;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: white;
  ${(props) => props.border === 'true' ? " border: 1px solid rgba(149, 133, 106, 1)" : 'border:none'};
  padding: .1rem 1.2rem;

  & > div {
    margin: 2rem 0 1rem 2rem;
    text-align: right;
    font-weight: 500;
    word-spacing: .1rem;

    &.date {
      font-size: .6rem;
      text-align: left;
      margin-left: 0;
      color: rgba(149, 133, 106, 1);
      text-decoration: underline;
    }
  }
  @media(max-width: 500px){
    border: 1px solid rgba(149, 133, 106, 1);
    padding-bottom: 1rem;
    & > div {
      margin: 1.2rem 0 0 2rem;
    }
  }
  
`
export const Comment_user_info = styled.div`
  display: flex;

  & > div.info {
    text-align: right;
    margin-right: 2rem;
    line-height: 1.7rem;

    & > h6 {
      font-size: 1.6rem;
      font-weight: 500;
    }

    & > span {
      font-size: .7rem;
      color: rgba(255, 255, 255, 0.63);
    }
  }
  @media(max-width: 500px){
    & > div.info{
      margin-right: .7rem;
      line-height: 1.3rem;
      & > h6 {
        font-size: 1.15rem;
        font-weight: 500;
      }
      & > span {
        font-size: .7rem!important;
      line-height: .8rem;
        display: inline-block;
      }
    }
  }
`
export const Comment_profile = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
  }
  @media(max-width: 500px){
    width: 40px;
    height: 40px;
  }
`
export const Dott = styled.div`
  & > span {
    width: 10px;
    height: 10px;
    margin: 0 .2rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.29);
    display: inline-block;

    &.this {
      background-color: transparent;
      border: 2px solid rgba(255, 255, 255, 0.29);
    }
  }
  @media(max-width: 500px){
   display: none;
  }
`
export const Responsive_comments=styled.div`
  display: none;
  @media(max-width: 500px){
    display: block;
  }
`
export const Responsive_comments_text=styled.div`
  font-size: .5rem;
  line-height: 1.1rem;
  &>div.date{
    font-size: .5rem;
    margin-top: .5rem;
  }
`