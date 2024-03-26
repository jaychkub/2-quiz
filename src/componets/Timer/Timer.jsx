import { useState, useEffect } from 'react';

import './Timer.scss'

const Timer = ({ resetTimer }) => {
    const [timeLeft, setTimeLeft] = useState(30);
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        if (shouldReset) {
            setTimeLeft(30)
            setShouldReset(false)
        }

        if (!timeLeft) return;

        const intervalID = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000)

        return () => clearInterval(intervalID);
    }, [timeLeft, shouldReset])

    useEffect(() => {
        if (resetTimer) {
          setShouldReset(true);
        }
      }, [resetTimer]);

    return (
        <p className='Timer'>{timeLeft}</p>
    );
}

export default Timer;
