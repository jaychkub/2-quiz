import { useState, useEffect } from "react";

import "./Timer.scss";

const Timer = ({ resetTimer, nextQuestion, penalty }) => {
	const [timeLeft, setTimeLeft] = useState(15);
	const [shouldReset, setShouldReset] = useState(false);

	useEffect(() => {
		if (shouldReset) {
			setTimeLeft(15);
			setShouldReset(false);
		}

		if (timeLeft <= 0) nextQuestion(0);

		const intervalID = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		return () => clearInterval(intervalID);
	}, [timeLeft, shouldReset]);

	useEffect(() => {
		setShouldReset(true);
	}, [resetTimer]);

	useEffect(() => {
		if (penalty) setTimeLeft(timeLeft - 5);
	}, [penalty]);

	return <p className="Timer">{timeLeft}</p>;
};

export default Timer;
