import React, { useRef, useState } from "react";

import "./Scoreboard.scss";

const Scoreboard = (props) => {
	const score = props.score;

	const [isSaved, setIsSaved] = useState(false);

	const nameRef = useRef();

	const handleSave = () => {
		if (!isSaved) {
			if (!localStorage.getItem(nameRef.current.value)) {
				localStorage.setItem(nameRef.current.value, score);
				setIsSaved(true);
			} else {
				alert(
					"Name is already in the system. Please use a different name."
				);
			}
		} else alert("You cant save your score twice.");
	};

	let scoreboard = [];
	for (let i = 0; i < localStorage.length; i++) {
		scoreboard.push([
			localStorage.key(i),
			localStorage.getItem(localStorage.key(i)),
		]);
	}
	scoreboard = scoreboard.sort((a, b) => a[1] - b[1]).reverse();

	return (
		<div className="Scoreboard-Container">
			<div className="text-Container">
				<p>
					You scored {score} points!{" "}
					{/* {scoreboard.length <= 3 && score > scoreboard[2][1]
						? "That gets you on the podium!"
						: "That doesn't quite get you on the podium."} */}
				</p>
			</div>
			<div className="Scores-Container">
				<div className="Save-Container">
					<div className="Save-Field">
						<input ref={nameRef} placeholder="name" type="text" />
						<button onClick={handleSave}>SAVE</button>
					</div>
				</div>
				<div className="Podium-Container">
					<div className="Podium Silver">
						<p className="name">
							{scoreboard.length > 1
								? scoreboard[1][0] + " - " + scoreboard[1][1]
								: " "}
						</p>
						<p className="place">2</p>
					</div>
					<div className="Podium Gold">
						<p className="name">
							{scoreboard.length > 0
								? scoreboard[0][0] + " - " + scoreboard[0][1]
								: " "}
						</p>
						<p className="place">1</p>
					</div>
					<div className="Podium Bronze">
						<p className="name">
							{scoreboard.length > 2
								? scoreboard[2][0] + " - " + scoreboard[2][1]
								: " "}
						</p>
						<p className="place">3</p>
					</div>
				</div>
				<div className="Github">
					<p>
						Try out some of my other projects{" "}
						<a href="https://github.com/jaychkub/">here</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Scoreboard;
