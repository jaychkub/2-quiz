import React from "react";

import "./Scoreboard.scss";

const Scoreboard = (props) => {
	const score = props.score;

	return (
		<div className="Scoreboard-Container">
			<div className="text-Container">
				<p>
					You scored {score} points! That places you in __ place
					locally.
				</p>
			</div>
			<div className="Podium-Container">
				<div className="silver"></div>
				<div className="gold"></div>
				<div className="bronze"></div>
			</div>
		</div>
	);
};

export default Scoreboard;
