import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { fetchJobById } from "../../actions/protected-data";
import NavBar from "../navbar";
import "./single-job.css";

export class SingleJob extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchJobById(this.props.match.params.jobid));
  }

  render() {
    let links = ["Job List", "Logout"];
    console.log(this.props.currentJob);

    return (
      <div className="single-job">
        <NavBar links={links} />
        <div className="job-header">
          <h2>{this.props.currentJob.title}</h2>
          <h3>{this.props.currentJob.company}</h3>
          <button>See Job Posting</button>
          <img src="http://nvd3.org/examples/img/bullet.png" />
        </div>
        <div className="job-info">
          <div className="job-info-buttons">
            <button>Edit</button>
            <button>Remove</button>
          </div>
          <div className="job-info-list">
            <ul>
              <li>Contact Info: {this.props.currentJob.contact}</li>
              <li>Application Deadline: {this.props.currentJob.deadline}</li>
              <li>Style of Company: Startup</li>
              <li>Tech Keywords: HTML5, CSS3, Javascript, React</li>
            </ul>
          </div>
          <div className="job-notes">
            <h4>Notes</h4>
            <p>
              Remote work available - emphasize independent work in cover letter
            </p>
            <p>Java + .NET are a plus - brush up on .NET</p>
            <p>40 minute commute</p>
          </div>
        </div>
        <div className="job-checkpoints">
          <div className="checkpoints-header">
            <h3>Checkpoints</h3>
            <button>Add Checkpoint</button>
          </div>
          <div className="checkpoints-list">
            <div className="checkpoint">
              <h5>1. Resume Sent</h5>
              <p>Cover letter included:</p>
              <p>Dear Hiring Manager ...</p>
            </div>
            <div className="checkpoint">
              <h5>2. Phone Screen</h5>
              <p>Simple algorithm questions</p>
              <p>Asked about Node vs SQL</p>
            </div>
            <div className="checkpoint">
              <h5>3. First Interview (Culture Fit)</h5>
              <p>Got good feedback</p>
              <p>
                Questions: Why did you pick Automattic? I like working remotely
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentJob: state.protectedData.currentJob
});

export default connect(mapStateToProps)(SingleJob);
