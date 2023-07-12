import React from 'react'
import { useTimer } from 'react-timer-hook';

export const Timer = () => {
    const expiryTimestamp = new Date().getTime() + 10 * 60 * 1000; // Set the expiry timestamp to be 10 minutes from now
const {
        seconds,
        minutes,
        hours,
    } = useTimer({ expiryTimestamp, format: '12-hour'});

    const formatTime = (value) => value.toString().padStart(2, '0');

return (
    <div>
        <div style={{textAlign: 'center'}}>
        <div>
        <span>{formatTime(hours)}</span>:<span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
        </div>
        </div>
    </div>
    )
}
