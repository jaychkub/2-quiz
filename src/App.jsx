import { useState } from "react";
import "./App.scss";

import Quiz from "./componets/Quiz/Quiz";
import Scoreboard from "./componets/Scoreboard/Scoreboard";

import QUESTION1 from "./images/question-1.jpg";
import QUESTION2 from "./images/scorpio.png";
import QUESTION3 from "./images/gemini.png";
import QUESTION4 from "./images/libra.png";
import QUESTION5 from "./images/cancer.png";
import QUESTION6 from "./images/leo.png";
import QUESTION7 from "./images/aquarius.png";
import QUESTION8 from "./images/virgo.png";
import QUESTION9 from "./images/capricorn.png";
import QUESTION0 from "./images/pisces.png";

import rotate from "./images/rotate.png";

const questions = [
	{
		question: "Which Zodiac sign is represented by the Ram?",
		a: "Taurus",
		b: "Aries",
		c: "Gemini",
		d: "Cancer",
		correct: "b",
		image: QUESTION1,
	},
	{
		question: "Which sign is known as the Scorpion?",
		a: "Libra",
		b: "Sagittarius",
		c: "Scorpio",
		d: "Capricorn",
		correct: "c",
		image: QUESTION2,
	},
	{
		question: "The Twins represent which Zodiac sign?",
		a: "Aries",
		b: "Gemini",
		c: "Virgo",
		d: "Aquarius",
		correct: "b",
		image: QUESTION3,
	},
	{
		question: "Which sign is symbolized by the Scales?",
		a: "Libra",
		b: "Pisces",
		c: "Taurus",
		d: "Leo",
		correct: "a",
		image: QUESTION4,
	},
	{
		question: "The Crab is the symbol for which Zodiac sign?",
		a: "Cancer",
		b: "Scorpio",
		c: "Sagittarius",
		d: "Capricorn",
		correct: "a",
		image: QUESTION5,
	},
	{
		question: "Which sign is represented by the Lion?",
		a: "Virgo",
		b: "Leo",
		c: "Aquarius",
		d: "Aries",
		correct: "b",
		image: QUESTION6,
	},
	{
		question: "The Water Bearer symbolizes which Zodiac sign?",
		a: "Libra",
		b: "Aquarius",
		c: "Scorpio",
		d: "Pisces",
		correct: "b",
		image: QUESTION7,
	},
	{
		question: "Which sign is represented by the Maiden?",
		a: "Gemini",
		b: "Virgo",
		c: "Capricorn",
		d: "Sagittarius",
		correct: "b",
		image: QUESTION8,
	},
	{
		question: "The Goat is the symbol for which Zodiac sign?",
		a: "Capricorn",
		b: "Taurus",
		c: "Pisces",
		d: "Aries",
		correct: "a",
		image: QUESTION9,
	},
	{
		question: "The Fish represent which Zodiac sign?",
		a: "Pisces",
		b: "Cancer",
		c: "Scorpio",
		d: "Aquarius",
		correct: "a",
		image: QUESTION0,
	},
];

function App() {
	const [score, setScore] = useState(0);
	const [questionIndex, setQuestionIndex] = useState(0);
	const nextQuestion = (score) => {
		setScore((prevState) => {
			return prevState + score;
		});
		setQuestionIndex((prevState) => {
			return prevState + 1;
		});
	};

	return (
		<div className="App">
			{questions[questionIndex] ? (
				<Quiz
					question={questions[questionIndex]}
					nextQuestion={nextQuestion}
				/>
			) : (
				<Scoreboard score={score} />
			)}

			{/* <p className="AI">Powered by AI.</p> */}
		</div>
	);
}

export default App;
