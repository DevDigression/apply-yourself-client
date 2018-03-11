import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../navbar";
import LoginForm from "../login-form";
import "../login.css";

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  let links = ["Register"];

  return (
    <div className="login">
      <NavBar links={links} />
      <div className="login-background">
        <LoginForm />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
