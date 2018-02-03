import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import Dashboard from './dashboard';
import NavBar from "../navbar";
import LandingIntro from "../page-components/landing-intro";
import LandingSection from "../page-components/landing-section";
import LandingSteps from "../page-components/landing-steps";
import LandingRegister from "../page-components/landing-register";
import LandingFooter from "../page-components/landing-footer";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  let links = ["Login", "Signup"];
  return (
    <div className="home">
      {/* <LoginForm /> */}
      <NavBar links={links} />
      <LandingIntro header="Apply Yourself" />
      <LandingSection title="App Stack Overflow" show="right" order="1" />
      <LandingSection title="Coordinate the Clutter" show="left" order="2" />
      <LandingSection title="Always Progressing" show="right" order="3" />
      <LandingSteps />
      <LandingRegister />
      <LandingFooter text="Created by Chris Rodgers" />
      {/* <Link to="/register">Register</Link> */}
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
