import React from "react";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import "./landing-intro.css";

export class LandingIntro extends React.Component {
  handleDemo() {
        return this.props.dispatch(login("demouser", "demo123456"));
    }

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
          <div className={`intro-demo`}>
            <button className="try-demo" onClick={() => this.handleDemo()}>Try Demo</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingIntro);