import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { Link } from "react-router-dom";
import { fetchJobs, sortByDate } from "../../actions/protected-data";
import NavBar from "../navbar";
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
          <div className="sort">
            <h5>
              Sort by: <span onClick={() => this.props.dispatch(sortByDate(jobs))}>Date</span> | <span>Status</span>
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
        {jobs.map((job, index) => (
          <JobSection key={index} job={job} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        jobs: state.protectedData.jobs
    };
};

// export default connect(mapStateToProps)(Dashboard);
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
