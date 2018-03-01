import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchJobById, deleteJob } from "../../actions/protected-data";
import NavBar from "../navbar";
import Notes from "../page-components/notes";
import JobProgressionSingle from "../page-components/job-progression-single";
import Checkpoint from "../page-components/checkpoint";
import "./single-job.css";

export class SingleJob extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchJobById(this.props.match.params.jobid));
  }

  render() {
    console.log(this.props.currentJob);
    let links = ["Dashboard", "Logout"];
    let checkpoints = this.props.currentJob.checkpoints;
    return (
      <div className="single-job">
        <NavBar links={links} />
        <div className="job-header">
          <h2>{this.props.currentJob.title}</h2>
          <h3>{this.props.currentJob.company}</h3>
          <a href={this.props.currentJob.posting} target="_blank">
            <button>See Job Posting</button>
          </a>
          <JobProgressionSingle
            currentCheckpoint={this.props.currentJob.stage}
          />
        </div>
        <div className="job-info">
          <div className="job-info-buttons">
            <Link to={`edit/${this.props.match.params.jobid}`}>
              <button>Edit</button>
            </Link>
            <button
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure that you want to delete this job from your list?`
                  )
                ) {
                  this.props
                    .dispatch(deleteJob(this.props.match.params.jobid))
                    .then(() => this.props.history.push("/dashboard"));
                }
              }}
            >
              Remove
            </button>
          </div>
          <div className="job-info-list">
            <ul>
              {this.props.currentJob.contact ? (
                <li>Contact Info: {this.props.currentJob.contact}</li>
              ) : null}
              {this.props.currentJob.deadline ? (
                <li>Application Deadline: {this.props.currentJob.deadline}</li>
              ) : null}
              <li>Style of Company: {this.props.currentJob.style}</li>
              <li>
                Tech Keywords: {this.props.currentJob.keywords.join(", ")}
              </li>
            </ul>
          </div>
          <div className="job-notes">
            <h4>
              Notes <span className="autosave">(autosaves on exit)</span>
            </h4>
            <Notes
              initialValue={this.props.currentJob.notes}
              jobid={this.props.match.params.jobid}
              dispatch={this.props.dispatch}
              history={this.props.history}
            />
          </div>
        </div>
        <div className="job-checkpoints">
          <div className="checkpoints-header">
            <h3>Checkpoints</h3>
            <Link to={`/checkpoint/${this.props.match.params.jobid}`}>
              <button>Add Checkpoint</button>
            </Link>
          </div>
          <div className="checkpoints-list">
            {checkpoints.map((checkpoint, index) => (
              <Checkpoint
                key={index}
                checkpoint={checkpoint}
                jobid={this.props.match.params.jobid}
                checkpointid={index}
                dispatch={this.props.dispatch}
                history={this.props.history}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const { currentUser } = state.auth;
  return {
    currentJob: state.protectedData.currentJob,
    checkpoints: state.protectedData.checkpoints
  };
};

export default connect(mapStateToProps)(SingleJob);
