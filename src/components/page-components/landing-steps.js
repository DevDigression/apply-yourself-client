import React from "react";

import "./landing-steps.css";

const InnerHTML = require('dangerously-set-inner-html')

export default function LandingSteps(props) {
	return (
		<div className={`landing-steps`}>
			<h3>How It Works</h3>
			<div className={`steps-group`}>
				<div className={`steps-section`}>
					<img src="https://images.unsplash.com/photo-1502758898459-10885c4d334c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=dfb01718cacade8007f7e86f0b385230" />
					<h4>Add Jobs</h4>
					<p>Find a job of interest.
					Add it to your list.
					Include information such as primary contact, desired skills and a job-specific cover letter.</p>
				</div>
				<div className={`steps-section`}>
					<img src="https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=f6ae3f201177b8677ecc928160d743f4" />
					<h4>Keep Logs</h4>
					<p>Track your progress for each job by adding checkpoints such as sending your resume, scheduling interviews, and following up with employers.</p>
				</div>
				<div className={`steps-section`}>
					<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=6050a125f5034c4bf39301df9641f8f8" />
					<h4>View Stats</h4>
					<p>Analyze statistics about your job search as a whole.
					Find weak spots to improve.
					Focus and hone your skills in order to come back stronger.</p>
				</div>
			</div>
		</div>
	);
}