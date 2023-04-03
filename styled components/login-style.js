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
export const Login_image = styled.div`
  width: 42%;
  height: 530px;
  transform: rotate(24deg);

  & > img {
    width: 100%;
    height: 100%;
  }
`
export const Login_input_title = styled.div`
  color: rgba(149, 133, 106, 1);
  font-weight: 700;
  margin-bottom: .4rem;
`
export const Login_input = styled.div`
  &>input {
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    color: rgba(255, 255, 255, 0.82);
    padding-bottom: .6rem;
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
`
export  const Btn_detail=styled.div`
  position: absolute;
  top: 4.5rem;
  left: 5rem;
  color: rgba(255, 255, 255, 0.62);
  font-size: .9rem;
  &>span{
    color: rgba(149, 133, 106, 1);
   padding: .05rem 0 ;
    border-bottom: 1px solid rgba(149, 133, 106, 1);
  
  }
`