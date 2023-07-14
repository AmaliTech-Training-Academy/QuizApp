import React from 'react'
import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';

export const Timer = ({time, id}) => {
    const expiryTimestamp = new Date().getTime() + time * 60 * 1000; 
const {
        seconds,
        minutes,
        hours,
        isRunning,
    } = useTimer({ expiryTimestamp, autoStart: true,});

    const formatTime = (value) => value.toString().padStart(2, '0');

    const navigate = useNavigate()

    const timer = [
        <span key="hours">{formatTime(hours)}</span>,
        <span key="minutes">{formatTime(minutes)}</span>,
        <span key="seconds">{formatTime(seconds)}</span>,
    ];

    useEffect(()=>{
        if(!isRunning) {
            navigate(`/quiz/${id}/results`);
        }
    },[isRunning])

return (
    <div>
        <div style={{textAlign: 'center'}}>
            {isRunning ? (
            <div>
            {timer[0]}:{timer[1]}:{timer[2]}
            </div>
        ) : (
            <div>Time's up!</div>
        )}
        </div>
    </div>
    )
}
