import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import requiresLogin from "../requires-login";
import { fetchProtectedData } from "../../actions/protected-data";
import { fetchJobs } from "../../actions/users";
import NavBar from "../navbar";
import JobSection from "../page-components/job-section";
import "./dashboard.css";

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }

  render() {
    let links = ["Stats", "Logout"];
    console.log(this.props.state);
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
        <JobSection />
      </div>
    );
  }
}

// <div className="job-section">
//   <div className="job-image">
//     <img src="https://www.cyberark.com/wp-content/uploads/2016/01/CyberArk-Logo-Intro.jpg" />
//   </div>
//   <div className="job-text">
//     <h6>Happiness Engineer</h6>
//     <p>Current Stage:</p>
//     <p>5. Technical Interview</p>
//   </div>
//   <div className="job-status">
//     <p>02/01/2018</p>
//     <p>Completion: 70%</p>
//   </div>
// </div>
// <div className="job-section">
//   <div className="job-image">
//     <img src="https://dcassetcdn.com/design_img/68129/25098/25098_1256774_68129_image.png" />
//   </div>
//   <div className="job-text">
//     <h6>iOS Engineer</h6>
//     <p>Current Stage:</p>
//     <p>Application Rejected</p>
//   </div>
//   <div className="job-status">
//     <p>02/03/2018</p>
//     <p>Completion: 15%</p>
//   </div>
// </div>
//

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    jobs: state.protectedData.jobs
  };
};

export default connect(mapStateToProps)(Dashboard);
// export default requiresLogin()(connect(mapStateToProps)(Dashboard));
