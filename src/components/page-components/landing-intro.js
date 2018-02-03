import React from "react";

import "./landing-intro.css";

const InnerHTML = require('dangerously-set-inner-html')

export default class LandingIntro extends React.Component {
  render() {

    return (
      <div className={`landing-intro`}>
        <div className={`intro-heading`}>
          {this.props.header}
        </div>
      </div>
    );
  }
}
