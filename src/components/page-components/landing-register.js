import React from "react";

import "./landing-register.css";

const InnerHTML = require('dangerously-set-inner-html')

export default function LandingRegister(props) {
	return (
		<div className={`landing-register`}>
			<div className={`register-text`}>
				<p>You're on the job hunt.</p>
				<p>You've got prospects.</p>
				<p>All you need for success is to</p>
				<p>Apply Yourself</p>
			</div>
			<button>Try It Now!</button>
		</div>
	);
}