import React from "react";
import { Link } from "react-router-dom";
import "../pages/dashboard.css";

export default class JobSection extends React.Component {
  render() {
    return (
      <div className="job-section">
        <Link to={`job/${this.props.job.id}`}>
          <div className="job-image">
            <img
              src={this.props.job.image}
              alt="placeholder"
            />
          </div>
          <div className="job-text">
            <div className="job-main">
              <h5>{this.props.job.title}</h5>
              <h6>{this.props.job.company}</h6>
            </div>
            <div className="job-stage">
              <p>Current Stage:</p>
              <p>{this.props.job.stage}</p>
            </div>
          </div>
          <div className="job-status">
            <p>{this.props.job.date}</p>
            <p>Completion: {this.props.job.completion}</p>
          </div>
        </Link>
      </div>
    );
  }
}
