import React, {useState} from 'react';
import { useTimer } from 'react-timer-hook';
import { ToastContainer } from 'react-toastify';
import {Toast} from "@/components/toast";
import 'react-toastify/dist/ReactToastify.css';
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css'
function Swiper(props) {

    // const expiryTimestamp = new Date();
    // expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 120);
    // const {
    //     totalSeconds,
    //     seconds,
    //     minutes,
    //     hours,
    //     days,
    //     isRunning,
    //     start,
    //     pause,
    //     resume,
    //     restart,
    // } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    //
    // function notify(){
    //    Toast('done')
    // }
    let [rangeValue,setRangeValue]=useState({min:8.41 , max:15});
    const inputNumber = 123456789;
    const formattedNumber = inputNumber.toLocaleString('en-US');
    alert(formattedNumber);
    return (
       <> <div style={{color:"white"}}>2</div>
    {/*<ToastContainer />*/}


       </>
    );
}

export default Swiper;