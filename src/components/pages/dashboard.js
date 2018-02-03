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
          <div className="jobs-section">
            <ul>
              <li>Job</li>
              <li>Job</li>
              <li>Job</li>
            </ul>
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
