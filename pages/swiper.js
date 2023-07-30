import React from 'react';
import { useTimer } from 'react-timer-hook';
function Swiper(props) {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 120);
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
        <div style={{color:"white"}}>{minutes}:{seconds}</div>
    );
}

export default Swiper;