import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import requiresLogin from "../requires-login";
import { fetchProtectedData } from "../../actions/protected-data";
import { fetchJobs } from "../../actions/protected-data";
import NavBar from "../navbar";
import JobSection from "../page-components/job-section";
import "./dashboard.css";

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }

  render() {
    let links = ["Stats", "Logout"];
    console.log(this.props.jobs);
    return (
      <div className="dashboard">
        <NavBar links={links} />
        <div className="jobs-header">
          <div className="sort">
            <h5>
              Sort by: <span>Date | Status</span>
            </h5>
          </div>
          <div className="add-job">
            <Link to={`/add-job`}>
              <button>Add Job</button>
            </Link>
          </div>
          <div className="clear" />
        </div>
        <div className="jobs-list" />
        {this.props.jobs.map((job, index) => (
          <JobSection key={index} job={job} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    jobs: state.protectedData.jobs
  };
};

export default connect(mapStateToProps)(Dashboard);
// export default requiresLogin()(connect(mapStateToProps)(Dashboard));
