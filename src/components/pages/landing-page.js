import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Dashboard from "./dashboard";
import NavBar from "../navbar";
import LandingIntro from "../page-components/landing-intro";
import LandingSection from "../page-components/landing-section";
import LandingStepsContainer from "../page-components/landing-steps-container";
import LandingRegister from "../page-components/landing-register";
import LandingFooter from "../page-components/landing-footer";
import landingPageData from "./landing-page-data";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  let links = ["Login", "Register"];
  return (
    <div className="home">
      <NavBar links={links} />
      <LandingIntro header="Apply Yourself" />

      {landingPageData.map((landingSectionData, index) => (
        <LandingSection
          title={landingSectionData.title}
          content={landingSectionData.sectionText}
          show={index % 2 == 0 ? "right" : "left"}
          image={landingSectionData.sectionImage}
          key={index}
        />
      ))}

      <LandingStepsContainer />
      <LandingRegister />
      <LandingFooter text="Created by Chris Rodgers" />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
