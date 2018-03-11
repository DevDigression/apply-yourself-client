import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { Link } from "react-router-dom";
import {
  fetchJobs,
  sortByPriority,
  sortByStatus
} from "../../actions/protected-data";
import NavBar from "../navbar";
import Welcome from "../page-components/welcome";
import JobSection from "../page-components/job-section";
import "./dashboard.css";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priority: false,
      status: false
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }

  handlePriority() {
    if (this.state.priority === false && this.state.status === false) {
      this.setState({
        priority: true,
        status: false
      });
    } else if (this.state.priority === false && this.state.status === true) {
      this.setState({
        priority: true,
        status: false
      });
    }
  }

  handleStatus() {
    if (this.state.priority === false && this.state.status === false) {
      this.setState({
        priority: false,
        status: true
      });
    } else if (this.state.priority === true && this.state.status === false) {
      this.setState({
        priority: false,
        status: true
      });
    }
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
                className={this.state.priority ? "blue" : "black"}
                onClick={() => {
                  this.handlePriority();
                  this.props.dispatch(sortByPriority(jobs));
                }}
              >
                Priority
              </span>{" "}
              <span> | </span>{" "}
              <span
                className={this.state.status ? "blue" : "black"}
                onClick={() => {
                  this.handleStatus();
                  this.props.dispatch(sortByStatus(jobs));
                }}
              >
                Stage
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
        {this.props.jobs < 1 ? (
          <Welcome />
        ) : (
          jobs.map((job, index) => {
            return (
              <JobSection
                key={index}
                job={job}
                bgColor={index % 2 !== 0 ? "grey-bg" : "white-bg"}
              />
            );
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.currentUser.username,
    protectedData: state.protectedData.data,
    jobs: state.protectedData.jobs
  };
};

// export default connect(mapStateToProps)(Dashboard);
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
