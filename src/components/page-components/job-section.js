import React from "react";
import { Link } from "react-router-dom";
import "../pages/dashboard.css";

export default class JobSection extends React.Component {
  formatDate(newDate) {
    let date = new Date(newDate);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  render() {
    console.log(this.props.job);
    let jobBg = this.props.bgColor;
    return (
      <div className={`job-section ${jobBg}`}>
        <Link to={`job/${this.props.job.id}`}>
          <div className="job-image">
            <img src={this.props.job.image} alt="placeholder" />
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
            <p>Added {this.formatDate(this.props.job.date)}</p>
            <p>Completion: {this.props.job.completion}</p>
          </div>
        </Link>
        <div className="clear" />
      </div>
    );
  }
}
