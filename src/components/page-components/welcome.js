import React from "react";
import { Link } from "react-router-dom";

export default function Welcome(props) {
	return (
		<div className="welcome">
			<h2>Welcome!</h2>
			<h3>Find a job posting you are interested in.</h3>
			<h3>
				Then<div className="add-job-link">
					<Link to={`/add-job`}>
						<span> add it </span>
					</Link>
				</div>
				to your dashboard to start tracking!
			</h3>
		</div>
	);
}
