import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`
export const Login_container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6rem 2rem 0rem;
`
export const Login_form = styled.div`
  width: 29%;
  margin-right: 9rem;

  & > div {
    position: relative;
  }

  & > h6 {
    font-size: 1.3rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.82);
    margin-bottom: 4rem;
  }

`

export const Login_input_title = styled.div`
  color: rgba(149, 133, 106, 1);
  font-weight: 700;
  margin-bottom: .4rem;
`
export const Login_input = styled.div`
  & > input {
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    color: rgba(255, 255, 255, 0.82);
    padding-bottom: .4rem;
    border-bottom: 3px solid rgba(62, 62, 62, 1);
    font-size: 1.1rem;
    margin-bottom: 4rem;
    font-family: estedad, serif;

    &:focus {
      color: rgba(255, 255, 255, 0.82);
      border-bottom: 2px solid rgba(149, 133, 106, 1);
      font-size: 1.2rem;
    }

    &::placeholder {
      color: rgba(62, 62, 62, 1);
      font-weight: 800;
      font-size: 1.1rem;
    }
  }
`
export const Forget_password = styled.div`
  font-size: .8rem;
  font-weight: 600;
  word-spacing: .2rem;
  width: fit-content;
  border-bottom: 1px solid #776A57;
  color: #776A57;
  bottom: 2rem;
  left: 0;
  position: absolute;
  cursor: pointer;
`
export const Login_btn = styled.div`
  color: #95856A;
  width: fit-content;
  margin: 4rem auto;
  padding: .6rem 5.5rem;
  border: 2px solid #37332D;
  border-radius: 40px;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
`
export const Btn_detail = styled.div`
  position: absolute;
  top: 4.5rem;
  left: 5rem;
  color: rgba(255, 255, 255, 0.62);
  font-size: .9rem;
  cursor: pointer;

  & > span {
    color: rgba(149, 133, 106, 1);
    border-bottom: 1px solid rgba(149, 133, 106, 1);

  }
`
export const Login_image = styled.div`
  width: 42%;
  height: 530px;
  transform: rotate(24deg);

  & > img {
    width: 100%;
    height: 100%;
  }
`
////////////////varification/////////
export const Varification_form = styled.div`
  width: 50%;
  margin: 4rem 0 ;
  text-align: center;
  &>div{
    margin: 0 8rem 1.7rem;
    & > h6 {
      color: rgba(255, 255, 255, 0.75);
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: .8rem;
    }

    & > div {
      color: rgba(255, 255, 255, 0.72);
      font-size: .8rem;
      width: 60%;
      margin: 0 auto;

      &.gold {
        padding-top: 1rem;
        color: #95856A;
        font-weight: 500;
      }
    }
  }
 
`
export const Squares_container = styled.div`
    display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 57%;
`
export const Square = styled.input`
  color: rgba(255, 255, 255, 0.72);
  text-align: center;
  font-size: 1.8rem;
  background-color: transparent;
  width: 72px;
  height: 72px;
  border-radius: 15px;
  outline: none;
  border: none;
  box-shadow: 0 0 5px 5px #2B2726;
  &:focus{
    border: 1px solid rgba(212, 175, 55, 0.39);
  }
`
export const Varification_btn=styled.div`
  position: relative;
&>div.btn{
  border: 1px solid #37332D;
  padding:.8rem 2rem;
  border-radius: 20px;
  margin:4.5rem auto 1rem;
  color: #95856A;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}
  &>span.underline{
    color: #95856A;
    font-size: .7rem;
    border-bottom: 1px solid #95856A;
    bottom: -1.7rem;
    left: 5.5rem;
    position: absolute;
    cursor: pointer;
  }
 &>span.time{
   color: rgba(255,255,255,.70);
   position: absolute;
   bottom:-1.7rem;
   font-size: .8rem;
   right: 5rem;
 }
`
