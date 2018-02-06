import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class NavBar extends React.Component {
  render() {
    // if (loggedIn) {
    //   //links=
    // } else {
    //   //links=
    // }
    let links = this.props.links.map((link, i) => (
      <li key={i}>
        <Link to={`/${link.toLowerCase()}`} className={`nav-link`}>
          {link}
        </Link>
      </li>
    ));

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
