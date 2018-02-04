import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import NavBar from "../navbar";
import './single-job.css';


export function SingleJob(props) {

  let links = ["Job List", "Logout"];
  return (
    <div className="single-job">
      <NavBar links={links} />
      <div className="job-header">
        <h3>Front End Developer</h3>
        <h3>Automattic</h3>
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
            <li>Contact Info: info@automattic.com</li>
            <li>Application Deadline: 2 / 16 / 2018</li>
            <li>Style of Company: Startup</li>
            <li>Tech Keywords: HTML5, CSS3, Javascript, React</li>
          </ul>
        </div>
        <div className="job-notes">
          <h4>Notes</h4>
          <p>Remote work available - emphasize independent work in cover letter
            Java + .NET are a plus - brush up on .NET
            40 minute commute</p>
        </div>
        </div>
        <div className="job-checkpoints">
          <ul>
              <li>Checkpoint</li>
              <li>Checkpoint</li>
              <li>Checkpoint</li>
          </ul>
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SingleJob);