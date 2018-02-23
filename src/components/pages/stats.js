import React from "react";
import { connect } from "react-redux";
import NavBar from "../navbar";
import JobStagePieChart from "../page-components/job-stage-piechart";
import JobSkillsBarChart from "../page-components/job-skills-barchart";
import JobProgressionAvg from "../page-components/job-progression-avg";
import SkillsList from "../page-components/skills-list";
import requiresLogin from "../requires-login";
import { fetchJobs } from "../../actions/protected-data";
import "./stats.css";

export class Stats extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }

  render() {
    let links = ["Dashboard"];

    let jobs = this.props.jobs;
    let jobNumberTotal = this.props.jobs.length;
    let jobProgressionTotal = 0;
    let jobStages = {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    };
    let jobSkills = {};

    jobs.forEach(job => {
      if (!jobStages[job.stage]) {
        jobStages[job.stage] = 1;
      } else {
        jobStages[job.stage]++;
      }
    });

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
              <li>
                1. Resume / Cover Letter Sent:{" "}
                <span className="job-stage-data">{jobStages[1]}</span>
              </li>
              <li>
                2. Phone Screen:{" "}
                <span className="job-stage-data">{jobStages[2]}</span>
              </li>
              <li>
                3. First Interview (Culture Fit):{" "}
                <span className="job-stage-data">{jobStages[3]}</span>
              </li>
              <li>
                4. Coding Challenge:{" "}
                <span className="job-stage-data">{jobStages[4]}</span>
              </li>
              <li>
                5. Technical Interview:{" "}
                <span className="job-stage-data">{jobStages[5]}</span>
              </li>
              <li>
                6. Onsite Interview:{" "}
                <span className="job-stage-data">{jobStages[6]}</span>
              </li>
              <li>
                7. Job Offer:{" "}
                <span className="job-stage-data">{jobStages[7]}</span>
              </li>
              <li>
                Total: <span className="job-stage-data">{jobNumberTotal}</span>
              </li>
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
  // const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    // name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    jobs: state.protectedData.jobs
  };
};

// export default connect(mapStateToProps)(Stats);
export default requiresLogin()(connect(mapStateToProps)(Stats));
