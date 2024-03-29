import React from "react";

import "./Quiz.scss";

import Answer from "./Answer/Answer";
import Timer from "../Timer/Timer";

const Quiz = (props) => {
	const question = props.question;
	const nextQuestion = props.nextQuestion;

	const handleAnswer = (value) => {
		if (value === question["correct"]) {
			nextQuestion(
				Number(document.getElementsByClassName("Timer")[0].textContent)
			);
			handleTimerReset();
		} else handlePenalty();
	};

	const handlePenalty = () => {
		return true;
	};

	const handleTimerReset = () => {
		return true;
	};

	return (
		<div className="Quiz-Container">
			<div className="Question-Container">
				<p>{question["question"]}</p>
				<Timer
					resetTimer={handleTimerReset}
					nextQuestion={nextQuestion}
					penalty={handlePenalty}
				/>
			</div>
			<div className="Picture-Container">
				<img src={question["image"]} alt="" />
			</div>
			<div className="Answer-Container">
				<Answer
					value="a"
					question={question}
					handleAnswer={handleAnswer}
				/>
				<Answer
					value="b"
					question={question}
					handleAnswer={handleAnswer}
				/>
				<Answer
					value="c"
					question={question}
					handleAnswer={handleAnswer}
				/>
				<Answer
					value="d"
					question={question}
					handleAnswer={handleAnswer}
				/>
			</div>
		</div>
	);
};

export default Quiz;
