import React from "react";

import "./navbar.css";

const InnerHTML = require('dangerously-set-inner-html')

export default class NavBar extends React.Component { 

	render() {
		let links = this.props.links.map(link => <li>{link}</li>);

		return (
			<div className={`navbar`}>
				<div className={`logo`}>
					Apply Yourself
				</div>
				<div className={`links`}>
						{links}
				</div>
			</div>
		);
	}

}