import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { Link } from "react-router-dom";
import {
  fetchJobs,
  sortByDate,
  sortByStatus
} from "../../actions/protected-data";
import NavBar from "../navbar";
import Welcome from "../page-components/welcome";
import JobSection from "../page-components/job-section";
import "./dashboard.css";

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }

  render() {
    let links = ["Stats", "Logout"];
    let jobs = this.props.jobs;
    return (
      <div className="dashboard">
        <NavBar links={links} />
        <div className="jobs-header">
          <div className="sort-section">
            <h5>Sort By:</h5>
            <div className="sort-options">
              <span
                className="sort-date"
                onClick={() => this.props.dispatch(sortByDate(jobs))}
              >
                Date
              </span>{" "}
              |{" "}
              <span
                className="sort-status"
                onClick={() => this.props.dispatch(sortByStatus(jobs))}
              >
                Status
              </span>
            </div>
          </div>
          <div className="add-job">
            <Link to={`/add-job`}>
              <button>Add Job</button>
            </Link>
          </div>
          <div className="clear" />
        </div>
        <div className="jobs-list" />
        {jobs.map((job, index) => {
          return (
            <JobSection
              key={index}
              job={job}
              bgColor={index % 2 !== 0 ? "grey-bg" : "white-bg"}
            />
          );
        })}
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

// export default connect(mapStateToProps)(Dashboard);
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
