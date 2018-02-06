import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { fetchProtectedData } from "../../actions/protected-data";
import NavBar from "../navbar";
import "./dashboard.css";

export default class Dashboard extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchProtectedData());
  // }

  render() {
    let links = ["Stats", "Logout"];

    return (
      <div className="dashboard">
        <NavBar links={links} />
        <div className="sort">
          <h5>Sort by: Date | Status</h5>
        </div>
        <div className="jobs-list">
          <div className="job-section">
            <div className="job-image">
              <img src="https://dcassetcdn.com/design_img/8324/18028/18028_236752_8324_thumbnail.jpg" />
            </div>
            <div className="job-text">
              <h6>Senior React Engineer</h6>
              <p>Current Stage:</p>
              <p>7. Job Offer</p>
            </div>
            <div className="job-status">
              <p>01/20/2018</p>
              <p>Completion: 100%</p>
            </div>
          </div>
          <div className="job-section">
            <div className="job-image">
              <img src="https://www.cyberark.com/wp-content/uploads/2016/01/CyberArk-Logo-Intro.jpg" />
            </div>
            <div className="job-text">
              <h6>Happiness Engineer</h6>
              <p>Current Stage:</p>
              <p>5. Technical Interview</p>
            </div>
            <div className="job-status">
              <p>02/01/2018</p>
              <p>Completion: 70%</p>
            </div>
          </div>
          <div className="job-section">
            <div className="job-image">
              <img src="https://dcassetcdn.com/design_img/68129/25098/25098_1256774_68129_image.png" />
            </div>
            <div className="job-text">
              <h6>iOS Engineer</h6>
              <p>Current Stage:</p>
              <p>Application Rejected</p>
            </div>
            <div className="job-status">
              <p>02/03/2018</p>
              <p>Completion: 15%</p>
            </div>
          </div>
        </div>
        <div className="add-job">
          <button>Add Job</button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   const { currentUser } = state.auth;
//   return {
//     username: state.auth.currentUser.username,
//     protectedData: state.protectedData.data
//   };
// };

// export default requiresLogin()(connect(mapStateToProps)(Dashboard));
