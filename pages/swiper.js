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
    return (
       <> <div style={{color:"white"}}>2</div>
    {/*<ToastContainer />*/}
           <InputRange
               draggableTrack
               maxValue={20}
               minValue={0}
               onChange={(value)=>{setRangeValue(value)}}
               onChangeComplete={value => console.log(value)}
               value={rangeValue}
               formatLabel={value => value.toFixed(2)}
               step={.01}/>

       </>
    );
}

export default Swiper;