import React from "react";
import { connect } from "react-redux";
import NavBar from "../navbar";
import JobStagePieChart from "../page-components/job-stage-piechart";
import JobSkillsBarChart from "../page-components/job-skills-barchart";
import JobProgressionAvg from "../page-components/job-progression-avg";
import SkillsList from "../page-components/skills-list";
import requiresLogin from "../requires-login";
import "./stats.css";

export class Stats extends React.Component {
  render() {
    let links = ["Dashboard"];

    let jobs = this.props.jobs;
    let jobNumberTotal = this.props.jobs.length;
    let jobProgressionTotal = 0;
    let jobStages = {};
    let jobSkills = {};

    jobs.forEach(job => {
      if (!jobStages[job.stage]) {
        jobStages[job.stage] = 1;
      } else {
        jobStages[job.stage]++;
      }
    });
    console.log(jobStages);
    jobs.forEach(job => {
      job.keywords.forEach(keyword => {
        if (!jobSkills[keyword]) {
          jobSkills[keyword] = 1;
        } else {
          jobSkills[keyword]++;
        }
      });
    });

    jobs.forEach(job => {
      jobProgressionTotal += Number(job.stage);
    });

    return (
      <div className="stats">
        <NavBar links={links} />
        <div className="progression-avg">
          <h3>Average Jobs Progression</h3>
          <div className="progression-graph">
            <JobProgressionAvg
              jobProgressionTotal={jobProgressionTotal}
              jobNumberTotal={jobNumberTotal}
            />
          </div>
        </div>
        <div className="stages">
          <h3>Jobs at Each Stage</h3>
          <div className="stages-graph">
            <JobStagePieChart jobStages={jobStages} />
          </div>
          <div className="stages-list">
            <ul>
              <li>1. Resume / Cover Letter Sent: {jobStages[1]}</li>
              <li>2. Phone Screen: {jobStages[2]}</li>
              <li>3. First Interview (Culture Fit): {jobStages[3]}</li>
              <li>4. Coding Challenge: {jobStages[4]}</li>
              <li>5. Technical Interview: {jobStages[5]}</li>
              <li>6. Onsite Interview: {jobStages[6]}</li>
              <li>7. Job Offer: {jobStages[7]}</li>
              <li>Total: {jobNumberTotal}</li>
            </ul>
          </div>
        </div>
        <div className="skills">
          <h3>Desired Skills</h3>
          <div className="skills-graph">
            <JobSkillsBarChart skills={jobSkills} />
          </div>
          <div className="skills-list">
            <SkillsList jobSkills={jobSkills} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    // username: state.auth.currentUser.username,
    // name: `${currentUser.firstName} ${currentUser.lastName}`,
    // protectedData: state.protectedData.data,
    jobs: state.protectedData.jobs
  };
};

export default connect(mapStateToProps)(Stats);
// export default requiresLogin()(connect(mapStateToProps)(Stats));
