import React from "react";
import { Link } from "react-router-dom";
// import "../dashboard.css";

export default class JobSection extends React.Component {
  render() {
    return (
      <div className="job-section">
        <Link to={`job/${this.props.job.id}`}>
          <div className="job-image">
            <img src="https://dcassetcdn.com/design_img/8324/18028/18028_236752_8324_thumbnail.jpg" />
          </div>
          <div className="job-text">
            <h6>{this.props.job.title}</h6>
            <p>Current Stage:</p>
            <p>7. Job Offer</p>
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
