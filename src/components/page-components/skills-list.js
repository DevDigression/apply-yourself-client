import React from "react";

export default function SkillsList(props) {
	let skills = Object.keys(props.jobSkills);
	let skillsList = skills.map((skill, index) => (
		<li key={index}>
			{skill} : {props.jobSkills[skill]}
		</li>
	));
	return (
		<div className="list">
			<ul>{skillsList}</ul>
		</div>
	);
}
