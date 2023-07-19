import React from 'react'
import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Timer = ({time, onTimerExpired, isRunning}) => {
    const expiryTimestamp = new Date().getTime() + time * 60 * 1000; 
    const { seconds, minutes, hours, } = useTimer({ expiryTimestamp, autoStart: isRunning,});

    const userId = useSelector(state=> state.userData.user_id)

    const formatTime = (value) => value.toString().padStart(2, '0');

    useEffect(() => {
        if (seconds === 0 && minutes === 0 && hours === 0) {
        onTimerExpired(userId);
        }
    }, [seconds, minutes, hours ]);

    const navigate = useNavigate()

    const timer = [
        <span key="hours">{formatTime(hours)}</span>,
        <span key="minutes">{formatTime(minutes)}</span>,
        <span key="seconds">{formatTime(seconds)}</span>,
    ];

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
