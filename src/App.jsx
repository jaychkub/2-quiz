import { useState } from "react";
import "./App.scss";

import Quiz from "./componets/Quiz/Quiz";
import Scoreboard from "./componets/Scoreboard/Scoreboard";

const questions = [
	{
		question: "Which Zodiac sign is represented by the Ram?",
		a: "Taurus",
		b: "Aries",
		c: "Gemini",
		d: "Cancer",
		correct: "b",
	},
	{
		question: "Which sign is known as the Scorpion?",
		a: "Libra",
		b: "Sagittarius",
		c: "Scorpio",
		d: "Capricorn",
		correct: "c",
	},
	{
		question: "The Twins represent which Zodiac sign?",
		a: "Aries",
		b: "Gemini",
		c: "Virgo",
		d: "Aquarius",
		correct: "b",
	},
	{
		question: "Which sign is symbolized by the Scales?",
		a: "Libra",
		b: "Pisces",
		c: "Taurus",
		d: "Leo",
		correct: "a",
	},
	{
		question: "The Crab is the symbol for which Zodiac sign?",
		a: "Cancer",
		b: "Scorpio",
		c: "Sagittarius",
		d: "Capricorn",
		correct: "a",
	},
	{
		question: "Which sign is represented by the Lion?",
		a: "Virgo",
		b: "Leo",
		c: "Aquarius",
		d: "Aries",
		correct: "b",
	},
	{
		question: "The Water Bearer symbolizes which Zodiac sign?",
		a: "Libra",
		b: "Aquarius",
		c: "Scorpio",
		d: "Pisces",
		correct: "b",
	},
	{
		question: "Which sign is represented by the Maiden?",
		a: "Gemini",
		b: "Virgo",
		c: "Capricorn",
		d: "Sagittarius",
		correct: "b",
	},
	{
		question: "The Goat is the symbol for which Zodiac sign?",
		a: "Capricorn",
		b: "Taurus",
		c: "Pisces",
		d: "Aries",
		correct: "a",
	},
	{
		question: "The Fish represent which Zodiac sign?",
		a: "Pisces",
		b: "Cancer",
		c: "Scorpio",
		d: "Aquarius",
		correct: "a",
	},
];

function App() {
	const [questionIndex, setQuestionIndex] = useState(0);
	const nextQuestion = () => {
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
				<Scoreboard score={5} />
			)}

			<p className="AI">Powered by AI.</p>
		</div>
	);
}

export default App;
