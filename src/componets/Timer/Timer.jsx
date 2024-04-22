import { useState, useEffect } from "react";

import "./Timer.scss";

const Timer = ({ resetTimer, nextQuestion, penalty, isPaused }) => {
	const [timeLeft, setTimeLeft] = useState(20);
	const [shouldReset, setShouldReset] = useState(false);

	useEffect(() => {
		if (isPaused) {
			return;
		}

		if (shouldReset) {
			setTimeLeft(20);
			setShouldReset(false);
		}

		if (timeLeft <= 0) nextQuestion(0);

		const intervalID = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		return () => clearInterval(intervalID);
	}, [timeLeft, shouldReset]);

	useEffect(() => {
		if (resetTimer) setShouldReset(true);
	}, [resetTimer]);

	useEffect(() => {
		if (penalty) setTimeLeft((prevTimeLeft) => prevTimeLeft - 5);
	}, [penalty]);

	return <p className="Timer">{timeLeft}</p>;
};

export default Timer;
