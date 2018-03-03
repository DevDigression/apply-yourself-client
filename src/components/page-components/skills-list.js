import React from "react";

export default function SkillsList(props) {
	let skills = Object.keys(props.jobSkills);
	skills.sort((a, b) => props.jobSkills[b] - props.jobSkills[a]);
	let skillsList = skills.map((skill, index) => (
		<li key={index}>
			{skill} : <span className={props.jobSkills[skill] === 0 ? "data-zero" : "data-positive"}>{props.jobSkills[skill]}</span>
		</li>
	));
	return (
		<div className="list">
			<ul>{skillsList}</ul>
		</div>
	);
}
