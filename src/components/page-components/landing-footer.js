import React from "react";

import "./landing-footer.css";

export default function LandingFooter(props) {
	return (
		<div
			className={`footer`}
			dangerouslySetInnerHTML={{ __html: props.text }}
		/>
	);
}
