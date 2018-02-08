import React from "react";

import "./landing-footer.css";

const InnerHTML = require("dangerously-set-inner-html");

export default function LandingFooter(props) {
	return (
		<div
			className={`footer`}
			dangerouslySetInnerHTML={{ __html: props.text }}
		/>
	);
}
