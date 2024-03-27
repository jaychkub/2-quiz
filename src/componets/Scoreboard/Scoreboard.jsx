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

	return (
		<div className="Scoreboard-Container">
			<div className="text-Container">
				<p>
					You scored {score} points! That places you in _ place
					locally.
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
						<p className="name">Jake</p>
						<p className="place">2</p>
					</div>
					<div className="Podium Gold">
						<p className="name">Jake</p>
						<p className="place">1</p>
					</div>
					<div className="Podium Bronze">
						<p className="name">Jake</p>
						<p className="place">3</p>
					</div>
				</div>
				<div className="Mention-Container">
					<div className="Mention">4</div>
					<div className="Mention">5</div>
					<div className="Mention">6</div>
					<div className="Mention">7</div>
					<div className="Mention">8</div>
				</div>
			</div>
		</div>
	);
};

export default Scoreboard;
