import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => props.isopen === false ? "unset" : 'hidden'};
    height: ${(props) => props.isopen === false ? "unset" : '100vh'};
  }
`
export const Ba = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 400vh;
  position: absolute;
  top: 0;
  width: 100%;
  display: ${(props) => props.isopen === false ? "none" : 'block'};
  z-index: 2;
`
export const Card_container = styled.div`
  box-shadow: 1px 1px 10px 2px #262424;
  background-color: #1F1E1D;
  width: 950px;
  position: fixed;
  left: 0;
  right: 0;
  top: 5rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  border-radius: 15px;
  z-index: 3;
  display: ${(props) => props.isopen === false ? "none" : 'block'};
  @media (max-width: 500px){
    width: 90%;
  }
`
export const Card_header = styled.div`
  & > div {
    text-align: center;
   padding: .55rem 0;
    width: 100%;
    background-color:#51493D ;
    font-weight: 600;
  }

  & > div.right {
    // border-style: solid;
    // border-color: transparent transparent ${(props) => props.type === 'payment' ? "#51493D" : '#2A2826'} transparent;
    // border-width: 0 0 50px 50px;
    width: 100%;
    right: 0;
    color: ${(props) => props.type === 'payment' ? "white" : 'rgba(255, 255, 255, 0.42)'};

    & > span {
      top: .6rem;
    }
  }

  & > div.left {
    margin-left: 1.5rem;
    left: 0;
    width: 50%;
    border-style: solid;
    border-color: ${(props) => props.type === 'payment' ? "#2A2826" : '#51493D'} transparent transparent transparent;
    border-width: 50px 50px 0 0;
    color: ${(props) => props.type === 'payment' ? 'rgba(255, 255, 255, 0.42)' : "white"};

    & > span {
      bottom: .6rem;
    }
  }
`
export const Installment_container = styled.div`
  display: flex;
  margin: 6rem 0 2rem;
  justify-content: space-between;
`
export const Infos = styled.div`
  background-color: #252423;
  width: 32%;
  border: 1px solid rgba(81, 73, 61, 0.8);
  color: white;
  padding: 2rem 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: .9rem;
`
export const Installment_table = styled.div`
  background-color: #252423;
  width: 65%;
  border: 1px solid rgba(81, 73, 61, 0.8);
  color: white;
  font-size: .8rem;

  & > div {
    border-top: 1px solid rgba(81, 73, 61, 0.8);
    padding: 1rem 2rem;
    height: 60px;
  }

  & > div.table_title {
    display: flex;
    justify-content: space-between;
    color: white;
    border: none;
  }

`
export const Installment_Btn = styled.div`
  color: white;
  width: fit-content;
  padding: .5rem 3rem;
  background-color: rgba(149, 133, 106, 0.42);
  margin: 0 auto;
  cursor: pointer;
  border-radius: 7px;
`

export const Payment_container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 3rem 1rem;

  & > img {
    width: 43%;
    height: auto;
  }
  @media (max-width: 500px){
    & > img {
    display: none;
    }
    margin: 2rem auto 1rem;
  }

`
export const Payment_info = styled.div`
  width: 50%;
  padding-right: 3rem;
  color: white;

  & > div.info_text {
    width: fit-content;
    margin: 0 auto;
    line-height: 2.3rem;

    & > div {
      font-size: .7rem;
    }

    & > h6 {
      font-size: .85rem;
      font-weight: 600;
    }
  }

  & > p {
    font-size: .85rem;
    text-align: center;
    margin-top: 3rem;
  }

  & > div.price {
    text-align: center;
    margin: 2rem 0 1.5rem;
  }

  & > div.range_input {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    position: relative;
    padding-bottom: .2rem;

    & > div.value {
      background-color: rgba(81, 73, 61, 0.72);
      text-align: center;
      padding: .3rem .4rem;
      border-radius: 5px;


      & > input {
        width: 50px;
        height: 100%;
        background-color: transparent;
        border: 0;
        outline: none;
        text-align: center;
        color: white;

        &::placeholder {
          color: white;
        }
      }
    }

    & > div.customSlider {
      width: 70%;
      margin: .3rem auto 0;

      & > div.customSlider-track {
        border-radius: 5px;
        top: 4px;
        height: 4px;
        background: black;
      }

      & > div.customSlider-track.customSlider-track-0 {
        /* color of the track before the thumb */
        background: rgba(81, 73, 61, 1);
      }

      & > div.customSlider-thumb {
        cursor: pointer;
        background: rgba(81, 73, 61, 1);
        width: 12px;
        height: 12px;
        border-radius: 50%;
        outline: none;
      }

      & > div.customSlider-thumb:hover {
        box-shadow: 0 0 0 1px rgba(81, 73, 61, 1);
      }
    }

    & > span.range-value-r {
      position: absolute;
      font-size: .9rem;
      bottom: 0;
      right: 1.3rem;
      padding-top: .2rem;
    }

    & > span.range-value-l {
      position: absolute;
      font-size: .9rem;
      bottom: 0;
      left: 5.8rem;
      padding-top: .2rem;
    }
  }
  @media (max-width: 500px){
    width: 100%;
    padding: 0;
    & > div.info_text{
      & > div {
        font-size: .95rem;
      }
    }
    
  }
`