import React from "react";
import { connect } from "react-redux";
import NavBar from "../navbar";
import JobStagePieChart from "../page-components/job-stage-piechart";
import JobSkillsBarChart from "../page-components/job-skills-barchart";
import JobProgressionAvg from "../page-components/job-progression-avg";
import requiresLogin from "../requires-login";
import "./stats.css";

export class Stats extends React.Component {
  render() {
    let links = ["Dashboard"];

    return (
      <div className="stats">
        <NavBar links={links} />
        <div className="progression-avg">
          <h3>Average Jobs Progression</h3>
          <div className="progression-graph">
            <JobProgressionAvg />
          </div>
        </div>
        <div className="stages">
          <h3>Jobs at Each Stage</h3>
          <div className="stages-graph">
            <JobStagePieChart />
          </div>
          <div className="stages-list">
            <ul>
              <li>1. Resume / Cover Letter Sent: 24</li>
              <li>2. Phone Screen: 4</li>
              <li>3. First Interview (Culture Fit): 3</li>
              <li>4. Coding Challenge: 1</li>
              <li>5. Technical Interview: 2</li>
              <li>6. Onsite Interview: 1</li>
              <li>7. Job Offer: 0</li>
              <li>Total: 35</li>
            </ul>
          </div>
        </div>
        <div className="skills">
          <h3>Desired Skills</h3>
          <div className="skills-graph">
            <JobSkillsBarChart
              skills={[
                { skill: "Node", value: 4 },
                { skill: "React", value: 17 },
                { skill: "Javascript", value: 35 }
              ]}
            />
          </div>
          <div className="skills-list">
            <ul>
              <li>Javascript: 50%</li>
              <li>Node: 20%</li>
              <li>PHP: 10%</li>
              <li>React: 20%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Stats));
