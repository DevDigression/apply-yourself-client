import React from "react";

import "./landing-intro.css";

export default class LandingIntro extends React.Component {
  render() {
    return (
      <div className={`landing-intro`}>
        <div className={`background-overlay`}>
          <div className={`intro-heading`}>
            {this.props.header}
            <hr />
          </div>
          <div className={`intro-subheading`}>
            <p>Organize your application process</p>
            <p>and focus on landing the coding job</p>
            <p>you’ve been looking for!</p>
          </div>
        </div>
      </div>
    );
  }
}
