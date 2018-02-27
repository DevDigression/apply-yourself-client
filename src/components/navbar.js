import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import "./navbar.css";

export class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // if (this.props.loggedIn) {
    //   let links = ["Dashboard", "Stats", "Logout"];
    // } else {
    //   let links = ["Login", "Register"];
    // }

    let links = this.props.links.map((link, i) => {
      if (link === "Logout") {
        return (
          <li key={i}>
            <Link
              to={`/login`}
              className={`nav-link`}
              onClick={() => this.logOut()}
            >
              {link}
            </Link>
          </li>
        );
      }
      return (
        <li key={i}>
          <Link to={`/${link.toLowerCase()}`} className={`nav-link`}>
            {link}
          </Link>
        </li>
      );
    });

    return (
      <div className={`navbar`}>
        <div className={`logo`}>
          <Link to={`/`} className={`nav-logo`}>
            Apply Yourself
          </Link>
        </div>
        <div className={`links`}>{links}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);
