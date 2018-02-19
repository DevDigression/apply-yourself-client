import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchJobById, deleteJob, addCheckpoint } from "../../actions/protected-data";
import NavBar from "../navbar";
import Checkpoint from "../page-components/checkpoint";
import "./single-job.css";

export class SingleJob extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchJobById(this.props.match.params.jobid));
  }

  render() {
    let links = ["Dashboard", "Logout"];
    let checkpoints = this.props.currentJob.checkpoints;
    console.log(this.props.currentJob);
    return (
      <div className="single-job">
        <NavBar links={links} />
        <div className="job-header">
          <h2>{this.props.currentJob.title}</h2>
          <h3>{this.props.currentJob.company}</h3>
          <a href={this.props.currentJob.posting} target="_blank">
            <button>See Job Posting</button>
          </a>
          <img
            src="http://nvd3.org/examples/img/bullet.png"
            alt="placeholder"
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
                    .then(() => this.props.history.push('/dashboard'));
                }
              }}
            >
              Remove
            </button>
          </div>
          <div className="job-info-list">
            <ul>
              <li>Contact Info: {this.props.currentJob.contact}</li>
              <li>Application Deadline: {this.props.currentJob.deadline}</li>
              <li>Style of Company: {this.props.currentJob.style}</li>
              <li>Tech Keywords: {this.props.currentJob.keywords.join(", ")}</li>
            </ul>
          </div>
          <div className="job-notes">
            <h4>Notes</h4>
            <p>
              {this.props.currentJob.notes}
            </p>
          </div>
        </div>
        <div className="job-checkpoints">
          <div className="checkpoints-header">
            <h3>Checkpoints</h3>
            <Link to={`/checkpoint/${this.props.match.params.jobid}`}><button>Add Checkpoint</button></Link>
          </div>
          <div className="checkpoints-list">
            {checkpoints.map((checkpoint, index) => (
            <Checkpoint key={index} checkpoint={checkpoint} />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        // username: state.auth.currentUser.username,
        // name: `${currentUser.firstName} ${currentUser.lastName}`,
        // protectedData: state.protectedData.data,
        currentJob: state.protectedData.currentJob,
        checkpoints: state.protectedData.checkpoints
    };
};

export default connect(mapStateToProps)(SingleJob);
