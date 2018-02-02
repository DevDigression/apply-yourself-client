import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import LoginForm from "../login-form";
import LandingSection from "../page-components/landing-section";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      {/* <LoginForm /> */}
      <LandingSection title="App Stack Overflow" show="right" order="1" />
      <LandingSection title="Coordinate the Clutter" show="left" order="2" />
      <LandingSection title="Always Progressing" show="right" order="3" />
      {/* <Link to="/register">Register</Link> */}
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
