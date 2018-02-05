import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const InnerHTML = require('dangerously-set-inner-html')

export default class NavBar extends React.Component { 

	render() {
		let links = this.props.links.map(link => <li><Link to={`/${link.toLowerCase()}`}>{link}</Link></li>);

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