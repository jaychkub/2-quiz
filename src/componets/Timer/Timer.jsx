import { useState, useEffect } from 'react';

import './Timer.scss'

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (!timeLeft) return;

        const intervalID = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000)

        return () => clearInterval(intervalID);
    }, [timeLeft])

    return (
        <p className='Timer'>{timeLeft}</p>
    );
}

export default Timer;
