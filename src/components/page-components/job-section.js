import React from "react";
import { Link } from "react-router-dom";
import "../pages/dashboard.css";

export default class JobSection extends React.Component {
  render() {
    return (
      <div className="job-section">
        <Link to={`job/${this.props.job.id}`}>
          <div className="job-image">
            <img src="https://dcassetcdn.com/design_img/8324/18028/18028_236752_8324_thumbnail.jpg" />
          </div>
          <div className="job-text">
            <div className="job-main">
              <h5>{this.props.job.title}</h5>
              <h6>{this.props.job.company}</h6>
            </div>
            <div className="job-stage">
              <p>Current Stage:</p>
              <p>7. Job Offer</p>
            </div>
          </div>
          <div className="job-status">
            <p>01/20/2018</p>
            <p>Completion: 100%</p>
          </div>
        </Link>
      </div>
    );
  }
}
